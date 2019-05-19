# ws-flare-test-server

This project is intended to be deployed to Cloud Foundry as a test web socket server to demonstrate the ws-flare framework.

### Prerequisites

You will need a Cloud Foundry account. This can be setup here - [https://run.pivotal.io/](https://run.pivotal.io/). Once you have setup the account. You need to install the cf-cli tool which can be installed from here - [https://github.com/cloudfoundry/cli#downloads](https://github.com/cloudfoundry/cli#downloads).

Once the cf-cli tools are installed run this command to connect to Cloud Foundry

```
cf login -a api.run.pivotal.io
```

Give the correct credentials when prompted and select the correct space.

### Install a websocket server

Run the command below on the root of this project to install a simple web socket server on Cloud Foundry.

```
cf push app-name-here
```

*Note* as this is a shared service you need to provide a unique name as it may clash with someone else server name.
Once the app is installed you can connect to it from Cloud Foundry dashboard.

You will be given a url like [wss://app-name-here.cfapps.io:4443][wss://app-name-here.cfapps.io:4443]. *Note* make sure to use port 4443 to connect to web socket server
