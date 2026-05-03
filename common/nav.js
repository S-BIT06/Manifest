function setupBottomNav(activePage) {
  var navHTML = `
    <nav class="bottom-nav" aria-label="Bottom navigation">
      <a href="../profile/profile.html" data-page="profile">
        <span class="nav-icon">👤</span>
        <span>Profile</span>
      </a>
      <a href="../homepage/homepage.html" data-page="home">
        <span class="nav-icon">🏠</span>
        <span>Home</span>
      </a>
      <a href="../cart/cart.html" data-page="cart">
        <span class="nav-icon">🛒</span>
        <span>Cart</span>
      </a>
    </nav>
  `;

  document.body.insertAdjacentHTML("beforeend", navHTML);

  var links = document.querySelectorAll(".bottom-nav a");
  links.forEach(function (link) {
    if (link.getAttribute("data-page") === activePage) {
      link.classList.add("active");
    }
  });
}

function showToast(message) {
  var oldToast = document.querySelector(".toast");
  if (oldToast) {
    oldToast.remove();
  }

  var toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("show");
  }, 30);

  setTimeout(function () {
    toast.classList.remove("show");
  }, 1900);

  setTimeout(function () {
    toast.remove();
  }, 2300);
}

function initCanvasBackground() {
  var canvas = document.getElementById("bgCanvas");

  if (!canvas) {
    return;
  }

  var ctx = canvas.getContext("2d");
  var particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];

    for (var i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.15
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function (particle) {
      particle.x = particle.x + particle.dx;
      particle.y = particle.y + particle.dy;

      if (particle.x < 0 || particle.x > canvas.width) {
        particle.dx = particle.dx * -1;
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.dy = particle.dy * -1;
      }

      var gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius * 12
      );

      gradient.addColorStop(0, "rgba(119, 247, 255, " + particle.alpha + ")");
      gradient.addColorStop(1, "rgba(143, 99, 255, 0)");

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(particle.x, particle.y, particle.radius * 12, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener("resize", function () {
    resizeCanvas();
    createParticles();
  });

  resizeCanvas();
  createParticles();
  drawParticles();
}
