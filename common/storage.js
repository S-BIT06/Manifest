const STORAGE_KEYS = {
  users: "users",
  currentUser: "currentUser",
  selectedProductId: "selectedProductId",
  searchText: "searchText",
  category: "category"
};

function readJSON(key, fallbackValue) {
  var stored = localStorage.getItem(key);

  if (!stored) {
    return fallbackValue;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    return fallbackValue;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return readJSON(STORAGE_KEYS.users, []);
}

function saveUsers(users) {
  writeJSON(STORAGE_KEYS.users, users);
}

function makeUserId() {
  return "USER-" + Date.now();
}

function createUser(userData) {
  var users = getUsers();
  var email = userData.email.trim().toLowerCase();

  var existingUser = users.find(function (user) {
    return user.email.toLowerCase() === email;
  });

  if (existingUser) {
    return {
      ok: false,
      message: "An account with this email already exists."
    };
  }

  var newUser = {
    userId: makeUserId(),
    fullName: userData.fullName.trim(),
    email: email,
    phone: userData.phone.trim(),
    dialCode: userData.dialCode,
    password: userData.password,
    createdAt: new Date().toISOString(),
    address: {
      country: userData.address.country.trim(),
      state: userData.address.state.trim(),
      district: userData.address.district.trim(),
      place: userData.address.place.trim(),
      pincode: userData.address.pincode.trim()
    }
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);

  return {
    ok: true,
    user: newUser
  };
}

function loginUser(email, password) {
  var users = getUsers();
  var cleanEmail = email.trim().toLowerCase();

  var foundUser = users.find(function (user) {
    return user.email.toLowerCase() === cleanEmail && user.password === password;
  });

  if (!foundUser) {
    return {
      ok: false,
      message: "Invalid email or password."
    };
  }

  setCurrentUser(foundUser);

  return {
    ok: true,
    user: foundUser
  };
}

function setCurrentUser(user) {
  writeJSON(STORAGE_KEYS.currentUser, user);
}

function getCurrentUser() {
  return readJSON(STORAGE_KEYS.currentUser, null);
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
}

function requireLogin() {
  var currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "../login/login.html";
    return null;
  }

  return currentUser;
}

function getCartKey(userId) {
  return "cart_" + userId;
}

function getOrdersKey(userId) {
  return "orders_" + userId;
}

function getCart(userId) {
  return readJSON(getCartKey(userId), []);
}

function saveCart(userId, cartItems) {
  writeJSON(getCartKey(userId), cartItems);
}

function addProductToCart(userId, productId) {
  var cartItems = getCart(userId);
  var existingItem = cartItems.find(function (item) {
    return item.productId === productId;
  });

  if (existingItem) {
    existingItem.quantity = existingItem.quantity + 1;
  } else {
    cartItems.push({
      productId: productId,
      quantity: 1
    });
  }

  saveCart(userId, cartItems);
}

function updateCartQuantity(userId, productId, quantity) {
  var cartItems = getCart(userId);
  var cleanQuantity = Number(quantity);

  if (cleanQuantity < 1 || isNaN(cleanQuantity)) {
    cleanQuantity = 1;
  }

  cartItems = cartItems.map(function (item) {
    if (item.productId === productId) {
      item.quantity = cleanQuantity;
    }
    return item;
  });

  saveCart(userId, cartItems);
}

function removeFromCart(userId, productId) {
  var cartItems = getCart(userId).filter(function (item) {
    return item.productId !== productId;
  });

  saveCart(userId, cartItems);
}

function clearCart(userId) {
  saveCart(userId, []);
}

function getCartDetails(userId) {
  var cartItems = getCart(userId);
  var detailedItems = [];

  cartItems.forEach(function (cartItem) {
    var product = findProductById(cartItem.productId);

    if (product) {
      detailedItems.push({
        productId: product.productId,
        name: product.name,
        model: product.model,
        category: product.category,
        price: product.price,
        priceText: product.priceText,
        quantity: cartItem.quantity,
        subtotal: product.price * cartItem.quantity,
        product: product
      });
    }
  });

  return detailedItems;
}

function getCartTotal(userId) {
  var detailedItems = getCartDetails(userId);
  var total = 0;

  detailedItems.forEach(function (item) {
    total = total + item.subtotal;
  });

  return total;
}

function getOrders(userId) {
  return readJSON(getOrdersKey(userId), []);
}

function saveOrders(userId, orders) {
  writeJSON(getOrdersKey(userId), orders);
}

function createOrder(userId, paymentMethod, paymentDetail) {
  var cartDetails = getCartDetails(userId);
  var totalAmount = getCartTotal(userId);
  var orders = getOrders(userId);

  var order = {
    orderId: "ORD-" + Date.now(),
    userId: userId,
    items: cartDetails,
    totalAmount: totalAmount,
    paymentMethod: paymentMethod,
    paymentDetail: paymentDetail || "",
    date: new Date().toISOString()
  };

  orders.unshift(order);
  saveOrders(userId, orders);
  clearCart(userId);

  return order;
}

function setSearchData(searchText, category) {
  localStorage.setItem(STORAGE_KEYS.searchText, searchText || "");
  localStorage.setItem(STORAGE_KEYS.category, category || "all");
}

function getSearchData() {
  return {
    searchText: localStorage.getItem(STORAGE_KEYS.searchText) || "",
    category: localStorage.getItem(STORAGE_KEYS.category) || "all"
  };
}

function setSelectedProduct(productId) {
  localStorage.setItem(STORAGE_KEYS.selectedProductId, productId);
}

function getSelectedProductId() {
  return localStorage.getItem(STORAGE_KEYS.selectedProductId);
}

function formatDateTime(isoText) {
  if (!isoText) {
    return "Not available";
  }

  var date = new Date(isoText);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
