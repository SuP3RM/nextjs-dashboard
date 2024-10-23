import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB({
    region: 'localhost',
    endpoint: 'http://localhost:3000',
    accessKeyId: 'dummy', // Not required for local DynamoDB
    secretAccessKey: 'dummy', // Not required for local DynamoDB
});