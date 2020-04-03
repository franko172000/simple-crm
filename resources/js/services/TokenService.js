const TOKEN_KEY = "token";
const USERNAME = "username";
const USER_PHOTO = "user_photo";
const USER_PHOTO_URL = "user_photo";
const ACCOUNT_TYPE = "type";
const TokenService = {
    tempToken:null,
    getAccessToken(){
        return localStorage.getItem(TOKEN_KEY);
    },
    setAccessToken(data){
        localStorage.setItem(TOKEN_KEY,data)
    },
    setUserData(data){
        localStorage.setItem(USERNAME,data.name)
        localStorage.setItem(ACCOUNT_TYPE,data.acct_type)
        // localStorage.setItem(USER_PHOTO,data.photo)
        // localStorage.setItem(USER_PHOTO_URL,data.photo_url)
        // localStorage.setItem(USER_EMAIL,data.email)
    },
    getUserData(){
        return {
            name : localStorage.getItem(USERNAME),
            type : localStorage.getItem(ACCOUNT_TYPE),
            // photo : localStorage.getItem(USER_PHOTO),
            // photo_url : localStorage.getItem(USER_PHOTO_URL),
            // email : localStorage.getItem(USER_EMAIL)
        }
    },
    removeAccessToken(){
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USERNAME);
        // localStorage.removeItem(USER_PHOTO);
        // localStorage.removeItem(USER_PHOTO_URL);
        // localStorage.removeItem(USER_EMAIL);
    },
    getCsrfToken(){
        const metas = document.getElementsByTagName('meta');

        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === 'csrf-token') {
                return metas[i].getAttribute('content');
            }
        }
    },

};
module.exports =  TokenService;
