const stripe = require('stripe')('sk_test_51Olp1USFTSY5LCItA0XiwjniRaMRIdBUYRjIJKtFtqNN0eoxQJBtGSKJICz3BdSG908hOvkHMSVOpFCsGpOsaAQF00oQBclYG1');
//use url for redirecting page for enter data;

exports.pay = async (req, res) => {
    try {
     
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items:req.body.items.map((item) => {
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        success_url: "http://localhost:5173/",
        cancel_url: "http://localhost:5173",
      });
   
      res.json({ url: session.url });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  };



