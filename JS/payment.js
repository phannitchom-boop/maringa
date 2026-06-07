// Read subtotal from localStorage (set by Shopping-Cart) and update summary
function formatPrice(v) {
  return `$ ${Number(v || 0).toFixed(2)}`;
}

function loadOrderSummary() {
  const subtotal = Number(localStorage.getItem("cartSubtotal")) || 0;
  // default shipping and tax (modify as needed)
  const shipping = subtotal > 0 ? 5 : 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

  const elSubtotal = document.getElementById("summary-subtotal");
  const elShipping = document.getElementById("summary-shipping");
  const elTotal = document.getElementById("summary-total");

  if (elSubtotal) elSubtotal.textContent = formatPrice(subtotal);
  if (elShipping) elShipping.textContent = formatPrice(shipping);
  if (elTotal) elTotal.textContent = formatPrice(total);
}

window.addEventListener("DOMContentLoaded", loadOrderSummary);

function confirmOrder() {
  let payment =
    document.querySelector('input[name="payment"]:checked')?.value ||
    "Not selected";
  alert(`Order Confirmed!\n\nPayment Method: ${payment}`);
  // clear cart after confirmation
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartSubtotal");
  // optionally redirect to a thank-you page
}

// expose confirmOrder to global scope for inline onclick
window.confirmOrder = confirmOrder;
