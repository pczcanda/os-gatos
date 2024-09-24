# Gatos - the Cats Olympics

A list of all your cathletes that have entered the Gatos.

## Setup

This app runs with

- **React** (through create-react-app)
- **Typescript**
- **Webpack** (in the background to build and run the application)
- **Material UI** (for quick layout and styling of the application)

## Installation

1. Clone the repo: `git clone git@github.com:pczcanda/os-gatos.git`
2. Go to folder: `cd os-gatos`
3. Install packages and dependencies: `npm install`
4. Run the application: `npm start`

## Gatos API

(The Cat API | https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW) has been used for this project

The following methods were implemented:

- `GET` /images
- `GET` /favourites
- `GET` /votes
- `POST` /images
- `POST` /favourites
- `POST` /votes
- `DELETE` /favourites/{id}

## Future Improvements

1. **Error handling**

   The UI for error handling can be improved to provide better feedback to the user and allow them to better navigate around the app when errors occur.

2. **Loading states**

   The current UI could have better and more meaningful loading states when the a new cat image is submitted and the list is refreshed, specially if many users are simultaneously adding cakes.

3. **Styling**

   Styling of the app can be vastly improved with the introduction of brand guidelines and a styleguide.

4. **Image upload**

   It would be nice to add a button to remove the selected image before submitting it. It would also be beneficial to check and validate the image before submitting it through the API.

5. **Caching of queries (React query)**

   To reduce the amount of calls through the API, caching the calls to GET data for a small perioid of time with a tool like React Query, could be beneficial to improve the app performance.

6. **PWA**

   The app could be turned into a full Progressive Web App (PWA) allowing users to use the app even if offline, where options to navigate with cached data and save new images, vote cated and pick favourites are availble offline and then leveraged once the device is back online.

7. **Tests**

   More test scenarios can be added to the app
