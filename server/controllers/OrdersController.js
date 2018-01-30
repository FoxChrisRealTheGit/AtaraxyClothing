const stripe = require('stripe')(process.env.STRIPE_SECRET)
module.exports = {
    addToCart: (req, res) => {
        const { session } = req;
        session.user.cart.push(req.body.cart)
        session.user.total += +req.body.price
        res.status(200).send(session)
    },
    getCart: (req, res) => {
        res.status(200).send(req.session.user)
    },
    updateQuantity: (req, res) => {
        console.log(req)
    },
    removeItem: (req, res) => {
        req.session.user.total -= req.session.user.cart[+req.query.item].price
        req.session.user.cart.splice(+req.query.item, 1)
        res.status(200).send(req.session.user)
    },
    updateShippingRate: (req, res)=>{

    },
    payment: (req, res, next) => {
        //convert amount to pennies
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
            if (amountArray[i] === ".") {
                if (typeof amountArray[i + 1] === "string") {
                    pennies.push(amountArray[i + 1]);
                } else {
                    pennies.push("0");
                }
                if (typeof amountArray[i + 2] === "string") {
                    pennies.push(amountArray[i + 2]);
                } else {
                    pennies.push("0");
                }
                break;
            } else {
                pennies.push(amountArray[i])
            }
        }
        const convertedAmt = parseInt(pennies.join(''));

        const charge = stripe.charges.create({
            amount: convertedAmt, // amount in cents, again
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test charge from react app'
        }, function (err, charge) {
            if (err) return res.sendStatus(500)
            return res.sendStatus(200);
            // if (err && err.type === 'StripeCardError') {
            //   // The card has been declined
            // }
        });

    },
    sendOrder: (req, res) => {

    }
}