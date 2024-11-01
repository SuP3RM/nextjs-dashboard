// pages/api/testDynamoDb.js
import AWS from 'aws-sdk';

// Global AWS config with explicit credentials and region
AWS.config.update({
    region: 'us-west-2',
    accessKeyId: 'dummyAccessKeyId',
    secretAccessKey: 'dummySecretAccessKey',
});

// Create a new DynamoDB instance with the specified endpoint
const dynamoDb = new AWS.DynamoDB({
    endpoint: process.env.DYNAMODB_ENDPOINT,
});

export default async function handler(req, res) {
    try {
        // Attempt a low-level API call to list tables
        const tables = await dynamoDb.listTables().promise();
        res.status(200).json({
            message: 'Successfully connected to DynamoDB!',
            tables,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error testing DynamoDB operations',
            error: error.message,
        });
    }
}
