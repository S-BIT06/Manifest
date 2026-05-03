const currentUser = requireLogin();
const productContainer = document.getElementById("productContainer");

function renderProductPage() {
  var productId = getSelectedProductId();
  var product = findProductById(productId);

  if (!product) {
    productContainer.innerHTML = `
      <section class="missing-card glass-card">
        <h2>No Product Selected</h2>
        <p>Go back to search and choose a gadget first.</p>
        <a class="btn-primary" href="../search/search.html">Go to Search</a>
      </section>
    `;
    return;
  }

  productContainer.innerHTML = `
    <section class="detail-card glass-card">
      <div class="detail-visual-wrap">
        ${productVisualHTML(product)}
      </div>

      <div class="detail-content">
        <div class="detail-badges">
          <span class="detail-badge">${product.category}</span>
          <span class="detail-badge">ID: ${product.productId}</span>
        </div>

        <h2>${product.name}</h2>
        <div class="detail-model">${product.model}</div>
        <div class="detail-price price-text">${product.priceText}</div>

        <ul class="spec-list">
          ${product.specs.map(function (spec) {
            return "<li>" + spec + "</li>";
          }).join("")}
        </ul>

        <div class="add-area">
          <button class="btn-primary" id="addToCartBtn">Add to Cart</button>
        </div>
      </div>
    </section>
  `;

  document.getElementById("addToCartBtn").addEventListener("click", function () {
    addProductToCart(currentUser.userId, product.productId);
    showToast(product.model + " added to cart");
  });
}

renderProductPage();
setupBottomNav("home");
initCanvasBackground();
