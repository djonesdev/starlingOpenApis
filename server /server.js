const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes/GetTransactions')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
  console.log(routes)
})

app.get('api/sandbox/transactions', (req, res) => {
  axios('/api/v1/transactions', {
      method: 'GET', 
      timeout: 4000, 
      // headers: { accessToken: config.accessToken }
  }, config.accessToken)
  .then(data => {
      res.send({ data });
  })
  .catch(err => {
      res.redirect('/error');
  });
});


app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})