const fs = require('fs');
const path = require('path');

const ridesFilePath = path.join(__dirname, '../data/rides.json');

const getRides = (req, res) => {
  try {
    const rides = getRidesData(); 
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch rides' });
  }
};

const getRideDetails = (req, res) => {
  try {
    const { rideId } = req.params;
    const rides = getRidesData();
    const ride = rides.find((r) => r.rideId === rideId);
    if (!ride) {
      return res.status(404).json({ error: 'Ride not found' });
    }
    res.json(ride);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch ride details' });
  }
};

const getRidesData = () => {
  try {
    const data = fs.readFileSync(ridesFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading rides file:', error);
    return [];
  }
};

module.exports = { getRides, getRideDetails };