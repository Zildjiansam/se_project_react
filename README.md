# WTWR (What to Wear?)

## About the project

The concept for this app is that the user can create a list of clothing articles that they own and assign each with one of three temperature ranges in which they'd like to wear that article. Then based on the users current location, we make an API call to gather the current weather information in the area and suggest which clothing articles that they might choose to wear.

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

### Component Structure

The project includes a components directory with the following components:

- App.js
  - Header.js
  - Main.js
    - WeatherCard.js
    - ItemCard.js
  - ModalWithForm.js
  - ItemModal.js
  - Footer.js

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## how to run the app

- cd to the project root
- open a terminal type `nvm use`
- type `npm install`
- type `npm run build`
