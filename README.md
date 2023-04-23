# Dev Resources API

## About

Dev Resources API is an API that provides a collective of free resources for software developers to enhance their skills and enable continuous learning.

## Getting Started

To use this API, you will need to have an mongoose account and set up a mongodb cluster to store the resource data. You will also need to have Node.js and npm installed on your machine.

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/DevEducate/dev-resources-api.git
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

3. Set up your MongoDB connection with Mongoose. You can add the following code to your `.env` file in the root directory of the project:

   ```makefile
   DATABASE_URL=<YOUR_MONGODBURL>
   ```

   Create a MongoDB database for your resource data. You can use a cloud-based MongoDB service like MongoDB Atlas or run a local instance of MongoDB. See the [MongoDB documentation](https://www.mongodb.com/docs/manual/administration/install-community/) and [Mongoose documentation](https://mongoosejs.com/docs/) for more information.

## Populate the database with sample data

```bash
   npm run seed
```

## Start the API server.

```bash
   npm run dev
```

Make requests to the API at `http://localhost:3000` or your custom port picked in your `.env` file defined as `PORT`. See the [API documentation](https://github.com/DevEducate/dev-resources-api/blob/main/.github/API.md) for more information on the available endpoints.

## Contributing

Contributions to this project are welcome! To contribute, please follow the GitHub flow and submit a pull request.

## License

This project is licensed under the MIT License.
