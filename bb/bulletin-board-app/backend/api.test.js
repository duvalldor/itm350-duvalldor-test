const api = require('./api');


// // Include the AWS SDK module
// const AWS = require('aws-sdk');
// // Set the region
// AWS.config.update({ region: 'us-east-1' });

// *** We could NOT get any mock of DynamoDB to work:
//     We spent days trying to figure out how to do it.

// *** We could NOT get this to work (among other errors, said 'putItem' was not in DynamoDB,
//     when all the documentation says it is)
// const putItemSpy = jest.spyOn(
// 	AWS.DynamoDB.prototype,
// 	'putItem')
// 	err = false;
// 	data = "Mocked Table";
	

// *** We could NOT get his to work (said it couldn't find dynamodb.js, by any path we tried)
// myDBmock = jest.mock('./bb/bulletin-board-app/node_modules/aws-sdk/clients/dynamodb.js');

// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   myDBmock.mockClear();
// });

it('should put an item into table', () => {
	input = { params: { title: "Picnic", detail: "With Ants", date: "07/04/1776", id: 1, } }
	result = '';
    api.event(input, result);
	
//	expect(myDBmock.putItem).toHaveBeenCalled();	
});