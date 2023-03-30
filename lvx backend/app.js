
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const mongoose = require('mongoose')
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 2000;
const cors = require('cors');

const items = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/testdata.json`)
);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, //optional
  })
  .then((con) => console.log('connected to Database'))
  .catch((err) => console.log(err));

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const getItems = (req, res) => {
  // console.log(req);
  res.status(200).json({
    status: 'sucess',
    results: items.length,
    // reqAt: req.requestTime,
    data: {
      items: items,
    },
  });
};
const getItemDetails = (req, res) => {
  const item = items.find((e) => e.id == req.params.id);
  // console.log(req);
  if (req.params.id > items.length - 1)
    return res.status(404).json({
      status: 'fail',
      message: 'imvalid ID',
    });

  res.status(200).json({
    status: 'sucess',
    data: {
      item: item,
    },
  });
};

app.route('/lvx/items').get(getItems);
app.route('/lvx/items/:id').get(getItemDetails);

app.listen(port, () => {
  console.log(`listening port ${port}...`);
});