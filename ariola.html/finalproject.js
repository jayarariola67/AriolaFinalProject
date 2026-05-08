let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toLocaleString()}
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("total").textContent = total.toLocaleString();
}

function searchCars() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}
