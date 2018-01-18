# widget-sales-react
A simple React web UI for [widget-sales-api](https://github.com/albertkawmi/widget-sales-api). You can [see it in action here](https://widget-sales-react.now.sh/).

## Dependencies

This project uses [Yarn](https://yarnpkg.com/en/) to manage dependencies. You can install Yarn via Homebrew on Mac:
```bash
brew update
brew install yarn 1.3.2
```
For other operating systems see the [Yarn installation docs](https://yarnpkg.com/lang/en/docs/install/#windows-tab).

Once Yarn is installed, you're ready to go:

```bash
git clone git@github.com:albertkawmi/widget-sales-react.git
cd widget-sales-react
yarn install
```

__NOTE__: Yarn creates a `yarn.lock` file, locking dependency versions so that installs run consistently across machines. At project start, latest stable version of Yarn was 1.3.2. If you have any problems installing or running dependencies, please try this version.

## Run locally `yarn start`
This app uses tooling from [Create React App](https://github.com/facebookincubator/create-react-app). For development, you can run a local server with `yarn start`.

By default, the app will hit the production server API (which is probably undesirable). You can configure this in the `.env` file in root project directory:
```bash
echo REACT_APP_API_URL=http://localhost:4000 > .env
```
`.env` is `.gitignore`d so it will not be committed to source control. This  means you'll need to add it on each machine you work on.

To run the server locally, see the README for [widget-sales-api](https://github.com/albertkawmi/widget-sales-api#widget-sales-api)

After `yarn start` a browser tab will open with the client-side app running in it. The dev server will watch for file changes and live-reload the browser on save.

## Unit Tests
[Jest](https://facebook.github.io/jest/) is used as a test runner and unit tests are written using the [Enzyme](https://github.com/airbnb/enzyme) library.

* `npm test` runs tests in watch mode for instant feedback
* `yarn test:coverage` runs tests once, with coverage report
* `yarn test:snapshots` will update failing snapshot tests. ([What's a snapshot test?](https://facebook.github.io/jest/docs/en/snapshot-testing.html))

## End-to-end Tests
End-to-end browser tests use [Selenium Webdriver](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html) and currently run in Google Chrome browser, in headless mode.

__NOTE:__ you will need Google Chrome installed on your machine to run end-to-end tests.

Run these commands in order:

1. `yarn test:e2e:update` will update the server used to run the tests
2. `yarn test:e2e:server` will start the server at http://localhost:4444/wd/hub (configurable in `e2e/driver.js`)
3. `yarn test:e2e` will run the end-to-end tests

Note that end-to-end tests have a separate Jest configuration located at `e2e/jestConfig.json`

## Code Linting

[ESLint](https://eslint.org/) is used and can be configured in the `.eslintrc` file.

## Deployment

[Zeit Now.sh](https://zeit.co/now) is used for cloud infrastructure and hosting. All Now deployments in their free plan will be given a subdomain with a hash under now.sh (see example link below). These URLs can be used as a staging step after local development.

For production, a friendly alias (without the hash) can be redirected to the new instance URL. This redirect means zero downtime. It also means deployments can be reverted by simply reassigning the alias to a previous instance.

### Staging
`yarn now:staging` will deploy the project to a URL like https://widget-sales-react-xxxxx.now.sh. You can create as many of these staging deployments as you like (within Now.sh's limits).

### Production
Use the command:
```bash
yarn deploy
```
This will run ESLint, run tests and finally it will run `yarn now:production`. This last step is like the now:staging command, but it points the project alias to the deployed instance.

The current alias is `widget-sales-react` which is connected to my credentials. You can modify this to anything you like in `package.json` and Now will allow you to deploy it (you may need to confirm your email address if it's your first time using Now, then it will store credentials on your machine.)

The current production URL is: https://widget-sales-react.now.sh

### Reverting
Since the deployment is simply an alias change, it is easy to revert:

1. Run `yarn now ls` to see a list of running instances
2. Copy the URL for the instance you wish to revert to
3. Run `yarn now alias the-new-instance-xxxxx.now.sh widget-sales-react`

__NOTE:__ if you are on the free plan of now.sh you can only have a few instances running concurrently. To remove instances, run the `yarn now ls` command and then use `yarn now rm the-instance-to-remove.now.sh` to destroy old instances.

## Related links

* [This client-side app in production](https://widget-sales-react.now.sh)
* [The API server in production](https://widget-sales-api.now.sh)
* [GitHub repo for the server app](https://github.com/albertkawmi/widget-sales-api)
* [My blog](http://kawmi.co)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://github.com/ReactTraining/react-router)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](https://github.com/airbnb/enzyme)
* [Selenium Webdriver](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
* [Yarn](https://yarnpkg.com/en/)
* [Zeit Now.sh](https://zeit.co/now)
