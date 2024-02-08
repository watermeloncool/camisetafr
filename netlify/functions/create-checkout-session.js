// netlify/functions/create-checkout-session.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'Votre produit',
        },
        unit_amount: 2000, // Le prix en centimes
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://votre-site.com/success',
    cancel_url: 'https://votre-site.com/cancel',
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  };
};
