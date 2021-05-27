# React Mock Code Challenge: Plantsy

## Notes

- data flow!
- updating the DOM after fetch

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-mock-code-challenge-plantshop/master/demo.gif)

## Instructions

Welcome to Plantsy! You've been tasked with building out some features for the
admin side of a plant store. The designers have put together the components and
CSS. Now it's up to you to bring the features to life by adding stateful logic
as well as persisting data to the backend via our API.

Your job will be to make our app work according to the user stories you will
find the [Core Deliverables](#Core-Deliverables) section.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm start`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Core Deliverables

As a user:

1. When the app starts, I can see all plants.

- Add state to keep track of all the plants

  - where does this state belong? (PlantPage)

- Make a GET /plants to get the plant data from the API
- update state with that plant data
- use an array of PlantCards to display my plant objects

2. I can add a new plant to the page by submitting the form.

- set up a controlled form by connecting each input to some state
- handle the form being submitted and send the data to the API POST /plants
- update state! add a new plant to the array in our PlantList

3. I can mark a plant as "sold out".

- add some isInStock state to the plant card
- toggle that state with the button is clicked
- conditionally render a button based on the isInStock state

4. I can search for plants by their name and see a filtered list of plants.

- add state to keep track of the search term being typed by the user
- use that state to filter the list of plants in our PlantList component
  so only plants that match the search are displayed

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

You'll have to add additional elements for these features. Feel free to style
them however you see fit!

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user:

1. I can update the price of a plant and still see the updated price after
   refreshing the page.

- create a price form for each plant
- when the form submits, PATCH /plants/:id
  - { "price": number }
- also update the price of the plant in state

2. I can delete a plant and it is still gone when I refresh the page.

- make a delete button next to each plant
- when the delete button is clicked, DELETE /plants/:id
- also remove that plant from the array in state

### Endpoints for Advanced Deliverables

#### PATCH /plants/:id

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 16.99
}
```

#### DELETE /plants/:id

Example Response:

```json
{}
```
