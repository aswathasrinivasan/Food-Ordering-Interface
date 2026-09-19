// ===============================
// CART ARRAY
// ===============================

let cart = [];


// ===============================
// ADD ITEM TO CART
// ===============================

function addToCart(name, price) {

    // Check if item already exists

    let existingItem = cart.find(item => item.name === name);


    if (existingItem) {

        // Increase quantity

        existingItem.quantity++;

    } else {

        // Add new item

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }


    // Update cart display

    displayCart();

}


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    let total = 0;


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some delicious food to your cart!
                </p>

            </div>

        `;

        document.getElementById("cart-total").innerText = "₹0";

        return;
    }


    // Clear old content

    cartItems.innerHTML = "";


    // Display each item

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ₹${item.price} × ${item.quantity}
                    </p>

                </div>


                <div class="cart-item-actions">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <strong class="item-total">
                    ₹${itemTotal}
                </strong>

            </div>

        `;

    });


    // Update total

    document.getElementById("cart-total").innerText =
        "₹" + total;

}


// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(index) {

    cart[index].quantity++;

    displayCart();

}


// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(index) {

    cart[index].quantity--;


    // Remove item if quantity becomes zero

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    displayCart();

}


// ===============================
// CLEAR CART
// ===============================

function clearCart() {

    cart = [];

    displayCart();

}


// ===============================
// CHECKOUT
// ===============================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });


    alert(
        "Order placed successfully! 🎉\n\n" +
        "Total amount: ₹" + total
    );


    clearCart();

}