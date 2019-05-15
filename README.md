# Twilio Flex Plugin Template Project - Zeit Now serverless

## Background

Twilio Flex is a fully programmable Contact Center application platform, supporting programmability at every layer in the stack.

Flex UI is React based and supports a Plugin architecture for modifying the user interface.
UI Plugins created using the `flex-plugin-builder` are based off a `create-react-app` template.

Most non-trivial user-interface plugins require access to backend APIs, however the default starting project does not provide any facility or guidance to host backend code.

As of version 2, `flex-plugin-builder` now supports a `--template-url` parameter to load a starting project which provides a convenient way to package an alternative starting project layout, that does cater for backend code.

This starter project is pre-configured to bundle the backend functionality for unified serverless deployment of static assets (including compiled plugin) and dynamic code on Zeit Now serverless environment

## Project Layout

In this project, `twilio-run` is used to adapt the Zeit serverless functions to a format compatible with Twilio Runtime.
For that reason, the project layout closely mirrors that used by `twilio-run`.
It also uses the same function signature as Twilio Runtime Functions, making it very straightforward to migrate Twilio Function code directly into this project structure.

The backend components are structured within this template in the following way:
```
/runtime/assets/${file}  <-- Static assets such as images, audio files. Served from ${baseUrl}/assets/${file}

/runtime/functions/${functionName}.js  <-- Dynamic backend code. Served from ${baseUrl}/api/${functionName}

/build/${pluginName}.js  <-- The compiled flex plugin served from ${baseUrl}/${pluginName}.js

/build/plugins.json  <-- The plugin manifest served from ${baseUrl}/plugins.json

```
## Setup

Create a Twilio Flex account [here](https://www.twilio.com/try-twilio?g=%2Fconsole%2Fflex%2Fsetup)

Create a Now account [here](https://zeit.co/signup)

Setup your functions using the layout structure above (a sample function has been provided).

For development and testing you can take advantage of `now dev` as `craco` has been configured to proxy backend requests for assets and functions to http://localhost:3000/

Environment variables will need to be configured on the Now runtime using `now secret add` and added to `now.json`.
TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN have been setup as examples, however they will not function until the matching secrets are set on Zeit (`@twilio-account`, `@twilio-auth`)

## Development
Call your functions in the UI plugin code using your favourite http request library at `/api/${functionName}`


