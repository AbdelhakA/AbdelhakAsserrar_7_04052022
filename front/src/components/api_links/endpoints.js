const endpoints = {
    // POSTS ACTIONS ENDPOINTS
    
    GET_ALL_POSTS: "/api/posts",
    CREATE_POST: "/api/post/create",
    DELETE_POST: "/api/post/:id",
    
    // LIKES / UNLIKES ENDPOINTS
    
    LIKE_UNLINKE: "/api/:idPost/like/:id",
    GET_LIKES: "/api/posts/:id",
    
    // COMMENTS ENDPOINTS
    GET_ALL_COMMENTS: "/api/comments",
    CREATE_COMMENT: "/api/comment/:id",
    
    // AUTH ENPPOINTS
    
    USER_SIGNUP: "/api/auth/signup",
    USER_LOGIN: "/api/auth/login",
    USER_LOGOUT: "/api/auth/logout",
    
    // USER ENDPOINTS
    
    GET_ONE_USER: "/api/auth/:id",
    GET_ALL: "/api/auth/",
    UPDATE_PSEUDO: "/api/auth/",
    UPDATE_PASSWORD: "/api/auth/updatepassword",
    DELETE_USER: "/api/auth/deleteuser",
    };
    
    export default endpoints; 