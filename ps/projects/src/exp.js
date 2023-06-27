// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://harinath021203:harinath@cluster0.2rooizd.mongodb.net/patchmanagement?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("connected");

});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a MongoDB schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  name1: String,
  name2: String,
  name3: String,
});
const Item = mongoose.model('bugs', itemSchema);


// Define routes for sending and retrieving data
app.post('/api/items', (req, res) => {
  const newItem = new Item({ name: req.body.software,name1:req.body.version,name2:req.body.description,name3:req.body.fts});
  console.log(newItem);
  newItem.save()
  .then(result => {
    console.log(result);
    // Handle successful save
  })
  .catch(error => {
    // Handle error
    console.log(error);
  });
});
const downloadSchema = new mongoose.Schema(
  {
      software: String,
      filename: String,
      username: String,
      downloadedtime: {
          type: Date,
          default: Date.now
      }

  },
  { versionKey: false } // Exclude the version key (__v)
);

const downloaded = mongoose.model('downloads', downloadSchema);

app.post('/api/downloads', (req, res) => {
  const newItem1 = new downloaded({software :req.body.software, filename: req.body.fname, username: req.body.uname });
  newItem1
      .save()
      .then((result) => {
          console.log('Saved item:', result);
          res.sendStatus(200);
      })

});

app.get('/api/downloads', (req, res) => {
  downloaded.find({})
      .then((items) => {
          res.status(200).json(items);
      })

});
/*
app.put('/api/items/:name', (req, res) => {
  const itemName = req.params.name;
  const update = {
    name: req.body.software,
    name1: req.body.version,
    name2: req.body.description,
    name3: req.body.fts,
  };

  Item.findOneAndUpdate({ name: itemName }, update, { new: true })
    .then(updatedItem => {
      if (updatedItem) {
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to update item' });
    });
});*/

app.delete('/api/items/:id', (req, res) => {
  const itemId = req.params.id;

  Item.findByIdAndDelete(itemId)
    .then(deletedItem => {
      if (deletedItem) {
        res.status(200).json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete item' });
    });
});



app.get('/api/items', (req, res) => {
  Item.find({})
    .then(items => {
      res.status(200).json(items);
    })
    
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve items' });
    });
});

// Start the server
// const port = 5000;
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
