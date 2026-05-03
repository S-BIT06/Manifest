const currentUser = requireLogin();

const track = document.getElementById("productTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const welcomeLine = document.getElementById("welcomeLine");

let filteredGadgets = MANIFEST_PRODUCTS.slice();
let currentIndex = 0;

if (currentUser) {
  welcomeLine.textContent = "Welcome, " + currentUser.fullName;
}

function getVisibleCards() {
  if (window.innerWidth <= 650) return 1;
  if (window.innerWidth <= 900) return 2;
  if (window.innerWidth <= 1180) return 3;
  return 4;
}

function renderCards(list) {
  track.innerHTML = list.map(function (item) {
    return `
      <article class="product-card">
        <span class="product-badge">${item.category}</span>
        ${productVisualHTML(item)}
        <h3>${item.name}</h3>
        <div class="product-model">${item.model}</div>
        <p>${item.shortSpecs}</p>
        <div class="product-footer">
          <span class="price-text">${item.priceText}</span>
          <button type="button" class="btn-ghost" onclick="openProduct('${item.productId}')">View</button>
        </div>
      </article>
    `;
  }).join("");

  updateSlider();
}

function updateSlider() {
  const cardsPerView = getVisibleCards();
  document.documentElement.style.setProperty("--cards-per-view", cardsPerView);

  const firstCard = track.querySelector(".product-card");

  if (!firstCard) {
    track.style.transform = "translateX(0px)";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const style = getComputedStyle(track);
  const gap = parseFloat(style.gap) || 18;
  const cardWidth = firstCard.getBoundingClientRect().width + gap;
  const maxIndex = Math.max(filteredGadgets.length - cardsPerView, 0);

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  track.style.transform = "translateX(-" + currentIndex * cardWidth + "px)";
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === maxIndex;
}

function openProduct(productId) {
  setSelectedProduct(productId);
  window.location.href = "../product/product.html";
}

function handleSearch(event) {
  event.preventDefault();
  setSearchData(searchInput.value.trim(), categoryFilter.value);
  window.location.href = "../search/search.html";
}

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", function () {
  const maxIndex = Math.max(filteredGadgets.length - getVisibleCards(), 0);

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

searchForm.addEventListener("submit", handleSearch);

window.addEventListener("resize", function () {
  updateSlider();
});

renderCards(filteredGadgets);
setupBottomNav("home");
initCanvasBackground();
