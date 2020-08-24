import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
const port = 5001;
app.use(cors());

app.get("/api/products",(req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id",(req, res) => {
  
  const productId = req.params.id;
  const product = data.products.find( x => x._id === productId );
  
  if(product){
    res.send(product);
  }else{
    res.status(404).send({ msg:"Product not found." });
  }

});

app.listen(port, () => {console.log('Server running on http://localhost:' + port)});
