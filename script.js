function addToCart() {
    // Retrieve product details from the form elements
    var productName = document.querySelector('.product-name').value.trim();
    var productPrice = document.querySelector('.product-price').value.trim();
    var productColor = document.querySelector('.product-color').value.trim();
    
    // Validate input values
    if (!productName || !productPrice || !productColor) {
        alert("Please fill out all product details before adding to the cart.");
        return;
    }

    var productDetails = {
        name: productName,
        price: productPrice,
        color: productColor
        // Add more properties for other product details if needed
    };

    try {
        // Retrieve the existing cart items from localStorage
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the current product details to the cart
        cartItems.push(productDetails);

        // Save the updated cart items back to localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Optional: Show a message or perform any other action after adding to cart
        alert("Product added to cart successfully!");
    } catch (error) {
        console.error("Failed to add product to cart:", error);
        alert("An error occurred while adding the product to the cart. Please try again.");
    }
}

