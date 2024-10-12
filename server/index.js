// NOTE: this file ends in js not jsx


const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")("sk_test_51Q8KVWGdgIHDv6qP7yzQY90QycfCryxfxys0gK3hNtppFL9nAS0YBxtutnLBlB6UJkgTwox3L9mCQLXsmjfN81zV00r0iiLiSy");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());


app.post("/payment", cors(), async (req, res) => {
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "EUR",
            description: "Smithereens",
            payment_method: id, 
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            }
        })
        console.log("Payment", payment);
        res.json({
            message: "Payment successful",
            success: true
        });

    } catch (error) {
        console.log(error);
        res.json({
            message: "Payment failed",
            success: false
        });
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 5000");
});