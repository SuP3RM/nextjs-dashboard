import docClient from 'app/lib/dynamodb';

export async function getServerSideProps() {
    const params = {
        TableName: 'customers',
    };

    const { Items } = await docClient.scan(params).promise();

    return {
        props: {
            customers: Items,
        },
    };
}

export default function Page() {
    // use the getServerSideProps function to fetch data from DynamoDB
    // and pass it to the page component as a prop


}