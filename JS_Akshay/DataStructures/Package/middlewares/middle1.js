function middle1(req, res, next){
    console.log("I am custom middleware");
    next();
}

module.exports = middle1;