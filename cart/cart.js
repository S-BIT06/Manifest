const currentUser = requireLogin();

const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const payNowBtn = document.getElementById("payNowBtn");

const paymentModal = document.getElementById("paymentModal");
const upiModal = document.getElementById("upiModal");
const successModal = document.getElementById("successModal");

const cancelPaymentBtn = document.getElementById("cancelPaymentBtn");
const continuePaymentBtn = document.getElementById("continuePaymentBtn");
const backToPaymentBtn = document.getElementById("backToPaymentBtn");
const upiPayBtn = document.getElementById("upiPayBtn");
const successHomeBtn = document.getElementById("successHomeBtn");

function renderCart() {
  var items = getCartDetails(currentUser.userId);
  var total = getCartTotal(currentUser.userId);

  cartTotal.textContent = formatMoney(total);
  payNowBtn.disabled = items.length === 0;

  if (items.length === 0) {
    cartList.innerHTML = `
      <section class="empty-cart glass-card">
        <div>
          <h2>Your cart is empty</h2>
          <p>Add a gadget from the product details page.</p>
          <a class="btn-primary" href="../homepage/homepage.html">Explore Gadgets</a>
        </div>
      </section>
    `;
    return;
  }

  cartList.innerHTML = items.map(function (item) {
    return `
      <article class="cart-item">
        ${productVisualHTML(item.product)}

        <div class="cart-info">
          <h3>${item.name}</h3>
          <div class="cart-model">${item.model}</div>
          <div class="cart-category">${item.category}</div>
          <div class="price-text">${item.priceText}</div>
        </div>

        <div class="cart-actions">
          <div class="quantity-wrap">
            <label for="qty-${item.productId}">Qty</label>
            <input
              class="quantity-input"
              id="qty-${item.productId}"
              type="number"
              min="1"
              value="${item.quantity}"
              onchange="changeQuantity('${item.productId}', this.value)"
            >
          </div>

          <div class="subtotal">Subtotal: ${formatMoney(item.subtotal)}</div>
          <button class="btn-danger" onclick="removeItem('${item.productId}')">Remove</button>
        </div>
      </article>
    `;
  }).join("");
}

function changeQuantity(productId, quantity) {
  updateCartQuantity(currentUser.userId, productId, quantity);
  renderCart();
}

function removeItem(productId) {
  removeFromCart(currentUser.userId, productId);
  renderCart();
  showToast("Item removed from cart");
}

function openModal(modal) {
  document.body.classList.add("no-scroll");
  modal.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("active");
  var activeModal = document.querySelector(".modal-overlay.active");

  if (!activeModal) {
    document.body.classList.remove("no-scroll");
  }
}

function closeAllModals() {
  paymentModal.classList.remove("active");
  upiModal.classList.remove("active");
  successModal.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

function completePayment(method, detail) {
  if (getCartDetails(currentUser.userId).length === 0) {
    showToast("Cart is empty");
    return;
  }

  createOrder(currentUser.userId, method, detail);
  closeAllModals();
  openModal(successModal);
  renderCart();

  setTimeout(function () {
    window.location.href = "../homepage/homepage.html";
  }, 2600);
}

payNowBtn.addEventListener("click", function () {
  openModal(paymentModal);
});

cancelPaymentBtn.addEventListener("click", function () {
  closeModal(paymentModal);
});

continuePaymentBtn.addEventListener("click", function () {
  var selectedMethod = document.querySelector("input[name='paymentMethod']:checked").value;

  if (selectedMethod === "Pay on Delivery") {
    completePayment("Pay on Delivery", "Cash / payment at delivery");
  } else {
    closeModal(paymentModal);
    openModal(upiModal);
  }
});

backToPaymentBtn.addEventListener("click", function () {
  closeModal(upiModal);
  openModal(paymentModal);
});

upiPayBtn.addEventListener("click", function () {
  var selectedUPI = document.querySelector("input[name='upiApp']:checked").value;
  completePayment("UPI", selectedUPI);
});

successHomeBtn.addEventListener("click", function () {
  window.location.href = "../homepage/homepage.html";
});

renderCart();
setupBottomNav("cart");
initCanvasBackground();
