const express = require('express');
const connectDB = require('./config/mongoose');
const path = require('path');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler');

// app.js or server.js
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
// connect to MongoDB
connectDB();

// health check route
app.get('/api/health', (req, res) => {
    res.status(200).send({status:'OK', message: 'artflare API is running'});
});  

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.status(200).send('Hello World!');
}
);

// feature routes
const homeRoute = require('./home/home.routes');
const authRoute = require('./auth/auth.routes');
const categoriesRoute = require('./categories/categories.routes');
const usersRoute = require('./users/user.routes');
const artworkRoute = require('./artwork/artwork.routes');
const ordersRoute = require('./orders/orders.routes');
const cartRoute = require('./cart/cart.routes');
const paymentRoute = require('./payment/payment.routes');
const ratingRoute = require('./rating/rating.routes');
const orderitemsRoute = require('./orderitems/orderitems.routes');
const rolesRoute = require('./roles/roles.routes');
const wishlistRoute = require('./wishlist/wishlist.routes');
const walletRoute = require('./wallet/wallet.routes');
const notificationRoute = require('./notification/notification.routes');
app.use('/api', require('./home/home.routes'));



app.use('/api', homeRoute);// homepage route
app.use('/api/auth', authRoute);// auth route
app.use('/api/categories', categoriesRoute);// categories route
app.use('/api/user', usersRoute);// users route
app.use('/api/artworks', artworkRoute);// artwork route
app.use('/api/orders', ordersRoute);// orders route
app.use('/api/cart', cartRoute);// cart route
app.use('/api/payments', paymentRoute);// payment route
app.use('/api/rating', ratingRoute);// rating route
app.use('/api/orderitems', orderitemsRoute);// orderitems route 
app.use('/api/roles', rolesRoute);// roles route
app.use('/api/wishlist', wishlistRoute);// wishlist route
app.use('/api/wallet',walletRoute);
app.use('/api/notifications', notificationRoute);// notification route
// app.use('/api/auth',require('./auth/auth.routes')); // auth route
//app.use('/api/properties',require('./properties/properties.routes')); // properties route

// error handling middleware
// app.use((err,req,res,next) => {
//     res.console.error(err.stack);
//     res.status(500).json( { error: 'Something broke!' });
// });

// error handling Routes
app.all(/.*/, (req, res) => {
    res.status(404).send('Not Found');
}
);

app.use(errorHandler);

module.exports = app;