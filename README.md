This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the application

### `1) yarn`

To install the dependencies

### `2) yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Random Notes

We don't need the entirety of lodash, to keep the bundle size down, lets install just the function we need, in our case `flowRight` for functional composition.

Axios is used as an HTTP library for ease of use and to ensure browser compatibility (fetch on IE issues).

Enzyme was chosen to render DOM in unit tests over `react-testing-library` as I have more experience with it. I did however try not to test implementation detail as much as I could. The most valuable are the filter tests as they contain the logic of data processing.

I have put comments around the codebase to explain the chosen implementation. If you feel I have missed something, please do not hesitate to ask and I'll do my best provide more information.
