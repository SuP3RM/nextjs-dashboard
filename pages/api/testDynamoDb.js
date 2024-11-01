// pages/api/testDynamoDb.js
import { DynamoDB } from 'aws-sdk';
const { DocumentClient } = DynamoDB;
const dynamoDb = new DocumentClient();
const dynamoDbService = new DynamoDB();

export default async function handler(req, res) {
    try {
        await dynamoDbService.createTable({
            TableName: 'TestTable',
            KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
            AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
            ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 },
        }).promise().catch(() => { }); // Catch error if table exists

        // Put an item
        await dynamoDb.put({
            TableName: 'TestTable',
            Item: { id: '123', name: 'Test Item' },
        }).promise();

        // Get the item back
        const data = await dynamoDb.get({
            TableName: 'TestTable',
            Key: { id: '123' },
        }).promise();

        res.status(200).json({
            message: 'Connection and operations successful!',
            item: data.Item,
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({
            message: 'Error testing DynamoDB operations',
            error: errorMessage,
        });
    }
}
