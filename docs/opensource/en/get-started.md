# Digipair Application Installation

This section describes the steps required to install and configure the Digipair application.

## Prerequisites

- Node.js must be installed on your machine. You can download and install Node.js from the official website: [Node.js](https://nodejs.org/).
- The environment variable OPENAI_API_KEY must be set on your system with a valid OpenAI key [openai.com](https://openai.com).

## Installation

There are two ways to install Digipair: using `npm` or `npx`.

### Installation with `npm`

To install Digipair globally on your system, run the following command:

```sh
npm install -g digipair
```

### Using `npx`

If you prefer to use Digipair without installing it globally, you can use `npx`:

```sh
npx digipair
```

## Starting the Server

Once Digipair is installed, you can start the web server by running the following command:

```sh
digipair
```

By default, the web server will start on port `8080`.

## Initial Configuration

On the first server launch, Digipair will create a directory called `factory` in the server's execution directory if it does not already exist. This `factory` directory will contain:

- The Digipair team
- The server configuration

The server itself is also referred to as the `factory`.

Make sure you have the necessary permissions to create directories and files in the server's execution directory.

## Accessing the Server

Once the server is running, you can access the Digipair application via your web browser at the following address:

```
http://localhost:8080
```

## Conclusion

You have now installed and configured Digipair. If you encounter any issues or have questions, please refer to the full documentation or contact Digipair technical support.
