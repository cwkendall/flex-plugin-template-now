# Your custom (full-stack) Twilio Flex Plugin

Twilio Flex Plugins allow you to customise the appearance and behaviour of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

This template project has been pre-configured to run front-end and back-end code on [Zeit Now](https://zeit.co/now).

The front-end component `src/components/CustomTaskListComponent.js` has been modified to fetch data from a backend function `runtime/functions/demoTime.js` and a single image asset `runtime/assets/backend-logo.svg` but is otherwise unchanged.

The function definition signature is identical to [Twilio Functions](https://www.twilio.com/docs/api/runtime/functions) leveraging [`twilio-run`](https://github.com/dkundel/twilio-run) to create an ExpressJS compatible serverless execution environment.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Also, if you wish to develop Serverless backend functions, you can install [Now Desktop](https://zeit.co/download) or install the CLI via `npm`:

```bash
npm install -g now
```

Afterwards install the dependencies by running `npm install`:

```bash
cd {{pluginFileName}}

# If you use npm
npm install
```

## Development

In order to develop locally, you can use use [`now dev` command](https://zeit.co/blog/now-dev) to launch the Flex Plugin in development mode AND host the backend functions by running:

```bash
now dev
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:<random_port>`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
now dev -p <PORT>
```

When you make changes to your code, the browser window will be automatically refreshed, likewise for the backend functions.

## Production build

Once you are happy with your plugin, you have to bundle it, in order to deploy it to Twilio Flex.

Run the following command to start the bundling:

```bash
npm run build
```

Afterwards, you'll find in your project a `build/` folder that contains a file with the name of your plugin project. For example `plugin-example.js`. Take this file and upload it into the Assets part of your Twilio Runtime.

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex which would provide them globally.


## Deployment

When using `now-cli`, the compiled plugin AND the backend functions can be deployed with a single command.
This will upload and deploy to: `https://{{plugin-name}}-{{deploy-id}}.now.sh` where {{deploy-id}} is unique for every deployment

```bash
now
```

To alias the deployment as `https://{{plugin-name}}.{{org-name}}.now.sh`

```bash
now alias
```
