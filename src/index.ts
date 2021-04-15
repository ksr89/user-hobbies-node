import express from 'express';
import mongoose from 'mongoose'
import { json, urlencoded } from 'body-parser';
import user from './routes/user';
import hobbies from './routes/hobbies';

const app = express();
app.use(urlencoded({
  extended: true
}));
app.use(json());
app.use(user);
app.use(hobbies);

mongoose.connect('mongodb://localhost:27017/user-hobbies', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  // tslint:disable-next-line:no-console
  console.log('connected to database')
})

const server = app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log('server is listening on port 3000')
})

export default server;
