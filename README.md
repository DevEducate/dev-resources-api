# Public Dev Resource API

## About

Public Dev Resource API is an API that provides a collective of free resources for software developers to enhance their skills and enable continuous learning.

## Getting Started

To use this API, you will need to have an AWS account and set up a DynamoDB table to store the resource data. You will also need to have Node.js and npm installed on your machine.

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/DevEducate/public-dev-resource-api.git
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

3. Set up your AWS credentials. You can either set them as environment variables or in a `~/.aws/credentials` file. See the [AWS SDK for JavaScript documentation](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html) for more information.

4. Create a DynamoDB table for your resource data. You can use the AWS Management Console or the AWS CLI to create the table. See the `previous instructions` for more information.

5. Populate the table with sample data.

   ```bash
    npm run seed
   ```

6. Start the API server.

   ```bash
   npm run start
   ```

7. Make requests to the API at `http://localhost:3000`. See the [API documentation](.github/API.md) for more information on the available endpoints.

## Contributing

Contributions to this project are welcome! To contribute, please follow the GitHub flow and submit a pull request.

## License

This project is licensed under the MIT License.
