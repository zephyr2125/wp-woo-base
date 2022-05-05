export const getUser = () => {
     const USER = {
        isLogin: localStorage.getItem('token_user') ? true : false,
        userName: localStorage.getItem('token_user_username')
     }
     return USER;
}

export const logout = () => {
    localStorage.removeItem('token_user');
    localStorage.removeItem('token_user_username');
    const USER = {
       isLogin: null,
       userName: null
    }
    return USER;
}