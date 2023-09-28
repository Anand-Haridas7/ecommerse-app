const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'hehe';

// MongoDB connection setup using MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Access the database using client.db()
    const db = client.db(dbName);

    // Configure your routes or perform database operations here

  } catch (err) {
    console.error(`MongoDB Connection Error: ${err}`);
  }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();

// Middleware and route configuration
app.use(express.json()); // Body parser middleware
// Configure your routes here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
