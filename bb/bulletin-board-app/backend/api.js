
const statusCodes = require('http').STATUS_CODES;
const httpConstants = require('http2').constants;

// // Include the AWS SDK module
// const AWS = require('aws-sdk');
// // Set the region
// AWS.config.update({ region: 'us-east-1' });



// // Instantiate a DynamoDB document client with the SDK
// let dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });


let params = {
  AttributeDefinitions: [
    {
      AttributeName: "TITLE",
      AttributeType: "S",
    },
    {
      AttributeName: "DETAILS",
      AttributeType: "S",
    },
    {
      AttributeName: "DATE",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "ID",
      KeyType: "HASH",
    },
    {
      AttributeName: "TITLE",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
  TableName: "EVENT_LIST",
  StreamSpecification: {
    StreamEnabled: false,
  },
};

// *** We couldn't get any mock of DynamoDB to work
// Call DynamoDB to create the table
// dynamodb.createTable(params, function (err, data) {
//   if (err) {
//     console.log("Error Creating " + params.TableName + " table", err);
//   } else {
//     console.log(params.TableName + " Table Created", data);
//   }
// });










var events = require('./events.js');

exports.events = function (req, res) {
  res.json(events);
};



exports.event = function (req, res) {
  // *** Jest says there is no function 'json'. We couldn't get Jest to see it no matter what we tried.
  //res.json(events[req.params.id]);

  if (req.params.title.trim()) {
    let putparams = {
      TableName: "EVENT_LIST",
      Item: {
        TITLE:   { S: req.params.title },
        DETAILS: { S: req.params.details },
        DATE:    { S: req.params.date },
        ID:      { N: req.params.id },
      },
    };
  
    // *** We couldn't get any mock of DynamoDB to work
    // Call DynamoDB to add the item to the table
    // dynamodb.putItem(putparams, function (err, data) {
    //   if (err) {
    //     console.log("Error adding item to table", err);
    //   } else {
    //     console.log("Success adding item to table", data);
    //   }
    // });
  }
};
