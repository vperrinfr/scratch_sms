# Scratch a SMS Prototype

A prototype illustrating how to scratch a SMS

## Run the app on Bluemix

1. Create a Node.js app on Bluemix
2. Clone the app
3. Modify manifest.yml, especially elements in bold
applications:
- path: .
  memory: 256M
  instances: 1
  domain: eu-gb.mybluemix.net
  name: grattage
  host: grattage
  disk_quota: 1024M
4. Modify index.html in public folder based on you wish
5. Deploy via cf push [app_name] command
