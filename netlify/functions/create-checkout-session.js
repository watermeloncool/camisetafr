// Assurez-vous d'installer les dépendances stripe et express via npm dans votre projet
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://splendid-macaron-38db40.netlify.app';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price: '{{PRICE_ID}}',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

// Utilisez le port par défaut de Netlify pour les fonctions serverless
app.listen(process.env.PORT || 4242, () => console.log('Server running'));
