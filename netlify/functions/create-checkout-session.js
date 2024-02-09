const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed", headers: {"Allow": "POST"} };
  }

  const { price } = JSON.parse(event.body); // Récupérer le prix du corps de la requête

  try {
    // Créer une session de paiement Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'chf',
          product_data: {
            name: 'Custom Product',
          },
          unit_amount: price * 100, // Stripe utilise les plus petites unités de monnaie
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://splendid-macaron-38db40.netlify.app/success.html', // Remplacer par votre URL de succès
      cancel_url: 'https://splendid-macaron-38db40.netlify.app/cancel.html', // Remplacer par votre URL d'annulation
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // Spécifiez les headers CORS ici si nécessaire pour d'autres usages
      },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};




/*

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

*/

