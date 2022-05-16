const endpoints = {
    // POSTS ACTIONS ENDPOINTS
    
    GET_ALL_POSTS: "/api/post",
    CREATE_POST: "/api/post",
    DELETE_POST: "/api/post/:id",
    
    // LIKES / UNLIKES ENDPOINTS
    
    LIKE_UNLINKE: "/api/post/:id/likeunlike",
    
    // COMMENTS ENDPOINTS
    GET_ALL_COMMENTS: "/api/comment",
    CREATE_COMMENT: "/api/comment/:id",
    
    // AUTH ENPPOINTS
    
    USER_SIGNUP: "/api/auth/signup",
    USER_LOGIN: "/api/auth/login",
    USER_LOGOUT: "/api/auth/logout",
    
    // USER ENDPOINTS
    
    GET_ONE_USER: "/api/auth/:id",
    GET_ALL: "/api/auth/",
    UPDATE_PSEUDO: "/api/auth/",
    UPDATE_PASSWORD: "/api/auth/passwordChange",
    DELETE_USER: "/api/auth/deleteUser",
    };
    
    export default endpoints;