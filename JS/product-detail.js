// Load product details from URL parameter
function loadProductDetail() {
  // Get product ID from URL parameter
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id") || 1; // Default to first product if no ID

  // Get product from database
  const product = getProductById(productId);

  if (!product) {
    console.error("Product not found");
    displayErrorMessage();
    return;
  }

  // Update page title
  document.title = product.name;

  // Update product image
  const productImage = document.querySelector(".image-box img");
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
  }

  // Update product name
  const productName = document.querySelector(".info h2");
  if (productName) {
    productName.textContent = product.name;
  }

  // Update rating
  const ratingElement = document.querySelector(".rating");
  if (ratingElement) {
    const stars = "⭐".repeat(product.rating);
    ratingElement.innerHTML = `${stars} <span>( ${product.reviews} )</span>`;
  }

  // Update description
  const descriptionElement = document.querySelector(".title1 p");
  if (descriptionElement) {
    descriptionElement.textContent = product.description;
  }

  // Update price
  const priceElement = document.querySelector(".price h1");
  if (priceElement) {
    priceElement.textContent = `$ ${product.price}`;
  }

  // Update stock status
  const stockElement = document.querySelector(".info h4");
  if (stockElement) {
    stockElement.textContent = product.stock;
  }

  // Update sizes
  const thumbsContainer = document.querySelector(".thumbs");
  if (thumbsContainer) {
    thumbsContainer.innerHTML = ""; // Clear existing buttons
    product.sizes.forEach((size) => {
      const button = document.createElement("button");
      button.textContent = size;
      button.addEventListener("click", function () {
        // Remove active state from all buttons
        document.querySelectorAll(".thumbs button").forEach((btn) => {
          btn.classList.remove("active");
        });
        // Add active state to clicked button
        this.classList.add("active");
        console.log("Selected size: " + size);
      });
      thumbsContainer.appendChild(button);
    });
  }

  // Add to cart button functionality
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", function () {
      const selectedSize = document.querySelector(".thumbs button.active");
      if (!selectedSize) {
        alert("Please select a size");
        return;
      }
      // Add product to cart in localStorage
      const cartKey = "cartItems";
      function getCart() {
        try {
          return JSON.parse(localStorage.getItem(cartKey)) || [];
        } catch (e) {
          return [];
        }
      }
      function saveCart(cart) {
        localStorage.setItem(cartKey, JSON.stringify(cart));
      }

      const cart = getCart();
      const sizeText = selectedSize.textContent;
      const existing = cart.find(
        (it) => it.id == productId && it.size == sizeText,
      );
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        cart.push({
          id: productId,
          name: product.name,
          price: product.price,
          image: product.image,
          size: sizeText,
          qty: 1,
        });
      }
      saveCart(cart);
      // Simple feedback
      alert(`Added to cart: ${product.name} - ${sizeText}`);
      console.log(
        `Added to cart: ${product.name} - Size: ${sizeText}, Price: $${product.price}`,
      );
    });
  }
}

// Display error message if product not found
function displayErrorMessage() {
  const body = document.querySelector(".body");
  if (body) {
    body.innerHTML = `
      <div class="card" style="text-align: center; padding: 50px;">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <a href="Product.html">
          <button class="back-btn">← Back to Products</button>
        </a>
      </div>
    `;
  }
}

// Load product details when page loads
window.addEventListener("DOMContentLoaded", function () {
  loadProductDetail();
});
