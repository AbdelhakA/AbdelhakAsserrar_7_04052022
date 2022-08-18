const endpoints = {
    // POSTS ACTIONS ENDPOINTS
    
    GET_ALL_POSTS: "/api/posts/",
    CREATE_POST: "/api/posts/create",
    DELETE_POST: "/api/posts/:id",
    
    // LIKES / UNLIKES ENDPOINTS
    
    LIKE_UNLIKE: "/api/:idPost/like/:id",
    GET_LIKES: "/api/posts/:id",
    
    // COMMENTS ENDPOINTS
    GET_ALL_COMMENTS: "/api/comments",
    CREATE_COMMENT: "/api/comment/:id",
    
    // AUTHENTIFICATION ENPPOINTS
    
    USER_SIGNUP: "/api/users/signup",
    USER_SIGNIN: "/api/users/signin",
    USER_LOGOUT: "/api/users/logout",
    
    // USER ENDPOINTS
    
    GET_ONE_USER: "/api/users/:id",
    GET_ALL: "/api/users/",
    UPDATE_PSEUDO: "/api/users/",
    UPDATE_PASSWORD: "/api/users/updatepassword",
    DELETE_USER: "/api/users/deleteuser",
    };
    
    export default endpoints; 