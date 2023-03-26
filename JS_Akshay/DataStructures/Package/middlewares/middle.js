function CustomMiddleware(req, res, next){
    console.log("I am 2nd custom middleware");
    next();
}

module.exports = CustomMiddleware;