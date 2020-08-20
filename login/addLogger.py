import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Login')


def lambda_handler(event, context):
    try:
        new_Logger = (json.loads(event['body']))
        userName = new_Logger['userName']
        phoneNumber = new_Logger['phoneNumber']
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
        "response": "New measure added succesfully",
        "userName": userName,
        "phoneNumber": phoneNumber
    }

    try:
        response = table.put_item(Item=new_Logger, ConditionExpression="attribute_not_exists(userName) ")
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

