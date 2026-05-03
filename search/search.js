requireLogin();

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultsGrid = document.getElementById("resultsGrid");
const resultInfo = document.getElementById("resultInfo");

function loadSearchPage() {
  var data = getSearchData();
  searchInput.value = data.searchText;
  categoryFilter.value = data.category;
  renderResults(data.searchText, data.category);
}

function renderResults(searchText, category) {
  var results = filterProducts(searchText, category);
  var displayText = searchText || "all gadgets";
  var categoryText = category === "all" ? "all categories" : category;

  resultInfo.textContent = "Showing " + results.length + " result(s) for " + displayText + " in " + categoryText + ".";

  if (results.length === 0) {
    resultsGrid.innerHTML = `
      <div class="no-results">
        <div>
          <h2>No gadgets found.</h2>
          <p>Try another category or search word.</p>
        </div>
      </div>
    `;
    return;
  }

  resultsGrid.innerHTML = results.map(function (product) {
    return `
      <article class="result-card" onclick="openProduct('${product.productId}')">
        ${productVisualHTML(product)}
        <h3>${product.name}</h3>
        <div class="result-model">${product.model}</div>
        <p>${product.shortSpecs}</p>
        <div class="result-meta">
          <span class="result-badge">${product.category}</span>
          <span class="price-text">${product.priceText}</span>
        </div>
      </article>
    `;
  }).join("");
}

function openProduct(productId) {
  setSelectedProduct(productId);
  window.location.href = "../product/product.html";
}

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  setSearchData(searchInput.value.trim(), categoryFilter.value);
  renderResults(searchInput.value.trim(), categoryFilter.value);
});

loadSearchPage();
setupBottomNav("home");
initCanvasBackground();
