const configureStripe = require('stripe');
const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_mrLMjc4nMvtUEVhev6XKTGe700ZHVUDoOk'
    : 'sk_test_mrLMjc4nMvtUEVhev6XKTGe700ZHVUDoOk';
const stripe = configureStripe(STRIPE_SECRET_KEY);



  
module.exports = stripe;