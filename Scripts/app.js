const express = require('express');
const app =express();
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
  });
// Create Router for the application
router.get('/home', (req, res) =>  {
    res.send('Hello World, This is home router');
});

router.get('/profile', (req, res) =>  {
    res.send('Hello World, This is profile router');
});

router.get('./login', (req, res) =>  {
    res.send('Hello World, This is Login router');
});

router.get('./logout', (req, res) =>  {
    res.send('Hello World, This is Logout router');
});

app.use('/', router);
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
 });

app.listen(process.env.port || 3000);
console.log('Webser is listening at port ' +  (process.env.port || 3000));