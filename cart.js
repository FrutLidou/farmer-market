var fs = require('fs');
const emptyCart = {};

exports.getCart = function(userId){
    cartFile = 'carts/' + userId + '.json';
    try {
        if (fs.existsSync(cartFile)) {
            return JSON.parse(cartFile);
        }
    } catch(err) {
        return emptyCart;
    }
}

function saveCart(userId, cart){
    cartFile = 'carts/' + userId + '.json';
    fs.writeFile(cartFile, cart);
}

function clearCart(userId){
    cartFile = 'carts/' + userId + '.json';
    try {
        if (fs.existsSync(cartFile)) {
            fs.unlink(cartFile);
        }
    } catch(err) {
    }
}