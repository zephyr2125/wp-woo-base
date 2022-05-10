export const getUser = () => {
    const USER = {
        isLogin: localStorage.getItem('token_user') ? true : false,
        name: localStorage.getItem('token_user_name'),
        id: localStorage.getItem('token_user_id'),
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    }
    return USER;
}

export const logout = () => {
    localStorage.removeItem('token_user');
    localStorage.removeItem('token_user_name');
    localStorage.removeItem('token_user_id');

    const USER = {
        isLogin: null,
        id: null,
        name: null
    }
    return USER;
}

export const getFormattedDate = (dateString) => {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);

    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const getQuantityCart = (cart) => {
    let quantity = 0;

    cart.forEach(item => {
        quantity += item.quantity;
    });

    localStorage.setItem('cart-total', JSON.stringify(quantity));
    return quantity;
}

export const getTotalCartQty = () => {
    let quantity = 0;
    quantity = localStorage.getItem('cart-total') ? JSON.parse(localStorage.getItem('cart-total')) : 0;
    console.log(quantity);
    return quantity * 1;
}