export const getUser = () => {
     const USER = {
        isLogin: localStorage.getItem('token_user') ? true : false,
        name: localStorage.getItem('token_user_name'),
        userName: localStorage.getItem('token_user_name')
     }
     return USER;
}

export const logout = () => {
    localStorage.removeItem('token_user');
    localStorage.removeItem('token_user_name');
    localStorage.removeItem('token_user_username');

    const USER = {
       isLogin: null,
       userName: null,
       name: null
    }
    return USER;
}