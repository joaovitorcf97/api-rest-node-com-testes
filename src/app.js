const bodyParser = require('body-parser');
const app = require('express')();
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .into(app);

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.status(200).send();
});

app.get('/users', (request, response) => {
  const users = [
    {
      name: 'John Doe',
      email: 'john@email.com',
    },
  ];

  response.status(200).json(users);
});

app.post('/users', (request, response) => {
  response.status(201).send(request.body);
});

module.exports = app;
