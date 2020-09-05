import express from 'express';
import cors from 'cors';
import data from './data';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = dotenv.config().parsed.MONGODB_URL;

mongoose.connect(mongodbUrl,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
const port = 5001;
app.use(cors());

app.use("/api/users", userRoute);

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
