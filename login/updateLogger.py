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
        "response": "User Update succesfully",
        "userName": userName,
    }

    try:
        response = table.update_item(Key={'userName': 'Racheli'}, UpdateExpression="set phoneNumber=:r",
                                     ExpressionAttributeValues={':r': phoneNumber}, ReturnValues="UPDATED_NEW")
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