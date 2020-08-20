from http.server import HTTPServer, BaseHTTPRequestHandler
import json


class requestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        print('http get')
        try:
            response = 'good job'
            return {
                'statusCode': 200,
                'body': json.dumps(response)
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'body': json.dumps(e.response['Error']['Message'])
            }


def main():
    port = 8080
    server_address = ('localhost', port)
    server = HTTPServer(server_address, requestHandler)
    print('Server running in port %s' %port)
    server.serve_forever()


if __name__ == '__main__':
    main()
