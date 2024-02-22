// const stripe =require('stripe')('sk_test_51Olp1USFTSY5LCItA0XiwjniRaMRIdBUYRjIJKtFtqNN0eoxQJBtGSKJICz3BdSG908hOvkHMSVOpFCsGpOsaAQF00oQBclYG1')
// // const express = require('express')

// exports.paymenttest = async(req,res)=>{
//         const {totalAmount} =req.body

//          const session = await stripe.checkout.sessions.create({
//             payment_method_types:["upid"],
//             line_items:totalAmount,
//             mode:'payment',
//             success_url: res.json({message:"payment successfully done",status:"true"}),
//             cancel_url:res.json({message:"payment failed",status:"false"})


//          })

//          res.json({id:session.id})
          


// }


// const stripe = require('stripe')('sk_test_51Olp1USFTSY5LCItA0XiwjniRaMRIdBUYRjIJKtFtqNN0eoxQJBtGSKJICz3BdSG908hOvkHMSVOpFCsGpOsaAQF00oQBclYG1');

// exports.paymentcreate = async (req, res) => {
//  const { totalAmount } = req.body;


//     try {
//         // Create a payment intent
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: totalAmount , // Amount in cents
//             currency: 'usd',
//             payment_method_types: ['card'], // Update payment method types as needed
//         });

//         // Return the client secret to the client
//         res.json({ client_secret: paymentIntent.client_secret,paymentIntentId : paymentIntent.id });
//     } catch (error) {
//         res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// };

// // Endpoint to confirm payment
// exports.paymentconfirm= async (req, res) => {
//     const { paymentIntentId } = req.body;

//     try {
//         // Confirm the PaymentIntent with the provided paymentIntentId
//         const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
        
//         // Send the payment status in the response
//         res.json({ status: paymentIntent.status });
//     } catch (error) {
//         // Handle any errors that occur during payment confirmation
//         console.error('Error confirming PaymentIntent:', error);
//         res.status(500).json({ error: error.message });
//     }
// };



// const express = require('express');
const stripe = require('stripe')('sk_test_51Olp1USFTSY5LCItA0XiwjniRaMRIdBUYRjIJKtFtqNN0eoxQJBtGSKJICz3BdSG908hOvkHMSVOpFCsGpOsaAQF00oQBclYG1');

// // const app = express();
// // app.use(express.json());


// exports.paymentintent =  async (req, res) => {
//   const { paymentMethodId, amount } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method: paymentMethodId,
//       confirm: true,
//       return_url:'http://localhost:5173/payment'
//     //   automatic_payment_methods:true,

//     });

//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while processing the payment' });
//   }
// };

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



