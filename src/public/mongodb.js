var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://thiago:Sequor2018*@cluster0-tzate.mongodb.net/test?retryWrites=true";
MongoClient.connect(uri, function(err, db) {
  // Paste the following examples here

  db.close();
});