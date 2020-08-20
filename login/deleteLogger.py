import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Login')


def lambda_handler(event, context):
    try:
        logger_to_delete = event['pathParameters']
    except Exception as e:
        return {
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            'statusCode': 400,
            'body': json.dumps('One or more detail is missing')
        }
    post_response = {
        "response": "User deleted succesfully",
        "userName": logger_to_delete['username'],
    }

    try:
        response = table.delete_item(Key={"userName": logger_to_delete['username']})
        return {
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            'statusCode': 200,
            'body': json.dumps(post_response)
        }
    except Exception as e:
        return {
            'headers': {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            'statusCode': 500,
            'body': json.dumps('error')
        }