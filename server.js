// sk_test_xD^V3S%DatSe83F@7J!$^e6nV524pSgUGbEm3nQTGA#FNdFHYRhhhHKgkHnZf5uaCdzt#TYUF5SuHQX899dSaAkDMkYrEmjRa
// Coffee: price_1QEjnKP7AwicnBbGoBBljQ38
// Sunglasses: price_1QEjonP7AwicnBbG5XGln7nR
// Camera: price_1QEjpsP7AwicnBbGqU7Yn9TT

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_xD^V3S%DatSe83F@7J!$^e6nV524pSgUGbEm3nQTGA#FNdFHYRhhhHKgkHnZf5uaCdzt#TYUF5SuHQX899dSaAkDMkYrEmjRa"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
