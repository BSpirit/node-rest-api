const express = require('express');
const port = process.env.PORT || 3000;
const gamesRoutes = require('./routes/games.js')


const app = express();

// Middlewares
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to API '));

app.use('/api/games', gamesRoutes)

app.listen(port, () => console.log(`Listening on port ${port}!`));
