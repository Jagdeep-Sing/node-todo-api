const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5b1794eb309b2f0314f5b09f')
  }).then( (result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });




  //db.close();
});
