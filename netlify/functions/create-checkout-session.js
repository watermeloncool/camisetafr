// Importez la bibliothèque Netlify Functions
const { handler } = require("@netlify/functions");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Fonction handler pour Netlify
exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price: 'price_1Ohp7bG4DSsnh5hVvBP27K1p',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `https://splendid-macaron-38db40.netlify.app/success.html`,
      cancel_url: `https://splendid-macaron-38db40.netlify.app/cancel.html`,
    });

    return {
      statusCode: 303,
      headers: { Location: session.url },
      body: ""
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
