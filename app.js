const express = require('express');
const userRoutes = require('./routes/users');
const rideRoutes = require('./routes/ride');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); 

app.use('/api/users', userRoutes);
app.use('/api/rides', rideRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});