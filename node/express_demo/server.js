const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routes/coin_router');
app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use('/coins', CoinRouter);
