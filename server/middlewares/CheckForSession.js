module.exports = (req, res, next) => {
    const { session } = req;
    req.session.save(function () {
        if (!session.user) {
            session.user = { username: '', cart: [], total: 0.00 };
        } 
        next();
    })
   
};