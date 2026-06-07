// Render cart items from localStorage and handle qty/remove actions
const CART_KEY = "cartItems";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(v) {
  return `$ ${Number(v).toFixed(2)}`;
}

function renderCart() {
  const cart = getCart();
  const container = document.querySelector(".main-contan");
  const summarySubtotal =
    document.querySelector(".cart-summary .summary-item .summary-value") ||
    null;

  // Replace contents with dynamic list
  if (!container) return;
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart"><p>Your cart is empty.</p></div>`;
    updateSummary(0);
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    const box = document.createElement("div");
    box.className = "box";
    const itemSubtotal = item.price * (item.qty || 1);
    subtotal += itemSubtotal;

    box.innerHTML = `
			<div class="image">
				<img src="${item.image || "../image/1.JPG"}" alt="${item.name}">
			</div>
			<div class="data">
				<h2>${item.name}</h2>
				<p>Size: ${item.size || "-"}</p>
				<h1><span class="decr" data-idx="${idx}">-</span> ${item.qty || 1} <span class="incr" data-idx="${idx}">+</span></h1>
				<div class="price-section">
					<div class="price-item">
						<div class="price-label">Unit Price</div>
						<div class="price-value">${formatPrice(item.price)}</div>
					</div>
					<div class="price-item">
						<div class="price-label">Subtotal</div>
						<div class="price-value">${formatPrice(itemSubtotal)}</div>
					</div>
				</div>
			</div>
			<button class="remove-btn" data-idx="${idx}">Remove</button>
		`;

    container.appendChild(box);
  });

  // Wire up buttons
  container.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = Number(btn.getAttribute("data-idx"));
      const cart = getCart();
      cart.splice(idx, 1);
      saveCart(cart);
      renderCart();
    });
  });

  container.querySelectorAll(".incr").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = Number(el.getAttribute("data-idx"));
      const cart = getCart();
      cart[idx].qty = (cart[idx].qty || 1) + 1;
      saveCart(cart);
      renderCart();
    });
  });

  container.querySelectorAll(".decr").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = Number(el.getAttribute("data-idx"));
      const cart = getCart();
      cart[idx].qty = Math.max(1, (cart[idx].qty || 1) - 1);
      saveCart(cart);
      renderCart();
    });
  });

  updateSummary(subtotal);
}

function updateSummary(subtotal) {
  const subtotalEl = document.querySelector(
    ".cart-summary .summary-item .summary-value",
  );
  const summaryValues = document.querySelectorAll(
    ".cart-summary .summary-value",
  );
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  // There are multiple .summary-value elements; map by order in Shopping-Cart.html
  const nodes = document.querySelectorAll(".cart-summary .summary-value");
  if (nodes && nodes.length >= 4) {
    nodes[0].textContent = formatPrice(subtotal);
    nodes[1].textContent = formatPrice(shipping);
    nodes[2].textContent = formatPrice(tax);
    nodes[3].textContent = formatPrice(total);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  renderCart();
});

function attachCheckoutHandler() {
  const btn = document.querySelector(".checkout-btn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    const cart = getCart();
    if (!cart || cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const subtotal = cart.reduce((s, it) => s + it.price * (it.qty || 1), 0);
    localStorage.setItem("cartSubtotal", subtotal);
    // navigate to payment page (same folder as Shopping-Cart.html)
    window.location.href = "payment.html";
  });
}

// ensure checkout handler is attached after render
window.addEventListener("DOMContentLoaded", function () {
  attachCheckoutHandler();
});
