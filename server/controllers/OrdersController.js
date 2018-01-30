module.exports = {
    addToCart: (req, res) => {
        const { session } = req;
        session.user.cart.push(req.body.cart)
        session.user.total += +req.body.price
        console.log(session.user)
        res.status(200).send(session)
    },
    getCart: (req, res) => {
        res.status(200).send(req.session.user)
    },
    updateQuantity: (req, res) => {

    },
    removeItem: (req, res) => {

    },
    sendOrder: (req, res) => {

    }
}