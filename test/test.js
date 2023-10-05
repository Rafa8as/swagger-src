const cart = [10, 15, 20, 40];
const stock = [10, 12, 25, 32];
const purchased = [];
const backToCart = [];

console.log("Cart:", cart)
console.log("Stock:", stock)

for (let i = 0; i < cart.length; i++) {
    if (cart[i] <= stock[i]) {
     
        stock[i] -= cart[i]; 
        purchased.push(cart[i]); 
        cart[i] = 0; 
    } else {
        
        purchased.push(stock[i]); 
        backToCart.push(cart[i] - stock[i]); 
        cart[i] -= stock[i];
        stock[i] = 0; 
    }
}

console.log("Purchased:", purchased);
console.log("Out of Stock:", backToCart);
console.log("Updated Stock:", stock);
console.log("Updated Cart:", cart);