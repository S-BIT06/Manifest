const currentUser = requireLogin();
const profileCard = document.getElementById("profileCard");
const ordersCard = document.getElementById("ordersCard");

function getInitials(name) {
  return name
    .split(" ")
    .filter(function (part) { return part.trim() !== ""; })
    .slice(0, 2)
    .map(function (part) { return part[0].toUpperCase(); })
    .join("");
}

function renderProfile() {
  profileCard.innerHTML = `
    <div class="profile-top">
      <div class="avatar-circle">${getInitials(currentUser.fullName)}</div>
      <div class="profile-name">
        <h2>${currentUser.fullName}</h2>
        <p>${currentUser.email}</p>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-box">
        <span>User ID</span>
        <strong>${currentUser.userId}</strong>
      </div>

      <div class="info-box">
        <span>Phone</span>
        <strong>${currentUser.dialCode} ${currentUser.phone}</strong>
      </div>

      <div class="info-box">
        <span>Account Created</span>
        <strong>${formatDateTime(currentUser.createdAt)}</strong>
      </div>

      <div class="info-box">
        <span>Country</span>
        <strong>${currentUser.address.country}</strong>
      </div>

      <div class="info-box">
        <span>State</span>
        <strong>${currentUser.address.state}</strong>
      </div>

      <div class="info-box">
        <span>District</span>
        <strong>${currentUser.address.district}</strong>
      </div>

      <div class="info-box">
        <span>Place</span>
        <strong>${currentUser.address.place}</strong>
      </div>

      <div class="info-box">
        <span>Pincode / Postal Code</span>
        <strong>${currentUser.address.pincode}</strong>
      </div>
    </div>

    <div class="profile-actions">
      <button class="btn-danger" id="logoutBtn">Logout</button>
    </div>
  `;

  document.getElementById("logoutBtn").addEventListener("click", function () {
    logoutUser();
    window.location.href = "../login/login.html";
  });
}

function renderOrders() {
  var orders = getOrders(currentUser.userId);

  if (orders.length === 0) {
    ordersCard.innerHTML = `
      <h2>Order History</h2>
      <div class="empty-orders">
        <div>
          <p>No orders yet.</p>
          <p>Your purchased gadgets will appear here.</p>
        </div>
      </div>
    `;
    return;
  }

  ordersCard.innerHTML = `
    <h2>Order History</h2>
    <div class="order-list">
      ${orders.map(function (order) {
        return `
          <article class="order-box">
            <div class="order-head">
              <strong>${order.orderId}</strong>
              <span>${formatDateTime(order.date)}</span>
            </div>

            <ul class="order-items">
              ${order.items.map(function (item) {
                return `<li>${item.model} × ${item.quantity} — ${formatMoney(item.subtotal)}</li>`;
              }).join("")}
            </ul>

            <div class="order-meta">Payment: ${order.paymentMethod} ${order.paymentDetail ? "(" + order.paymentDetail + ")" : ""}</div>
            <div class="order-meta">Total: ${formatMoney(order.totalAmount)}</div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

renderProfile();
renderOrders();
setupBottomNav("profile");
initCanvasBackground();
