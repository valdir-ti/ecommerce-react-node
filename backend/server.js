import express from 'express';
import data from './data';

const app = express();

app.get("/api/products",(req, res) => {
  res.send(data.products);
});

app.listen(5001, () => {console.log("Server running on http://localhost:5001")});

