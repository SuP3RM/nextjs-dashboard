import AWS from 'aws-sdk';

// Explicitly set AWS configuration with dummy credentials for local DynamoDB
AWS.config.update({
    region: process.env.AWS_REGION || 'us-west-2',
    accessKeyId: 'dummyAccessKeyId', // Placeholder value for local testing
    secretAccessKey: 'dummySecretAccessKey', // Placeholder value for local testing
});

const dynamoDb = new AWS.DynamoDB.DocumentClient({
    endpoint: process.env.DYNAMODB_ENDPOINT,
});

export default dynamoDb;