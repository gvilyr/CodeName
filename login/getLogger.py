import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Login')


def lambda_handler(event, context):
    try:
        userToGet = event['pathParameters']['username']
        response = table.get_item(Key={"userName": userToGet})
    except Exception as e:
        return {
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            'statusCode': 500,
            'body': json.dumps(e.response['Error']['Message'])
        }
    else:
        return {
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            'statusCode': 200,
            'body': json.dumps(response['Item'])
        }