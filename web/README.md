# Alliage - Web distribution

Welcome to the Web distribution of the Alliage Framework.  
This distribution comes with the essential modules necessary to build your own webserver.

## What's inside?

- [Alliage Framework](https://github.com/alliage-framework/framework): The framework itself
- [Alliage Core](https://github.com/alliage-framework/core): The core modules bringing the essential features
- [Alliage Web](https://github.com/alliage-framework/web): Modules bringing web capabilities

## Getting started

The starting point of this application is in the [`src/controllers/main.ts`](./src/processes/main.ts). That's from this file that you'll be able to start developping your web application.

### Run in development mode

```
yarn alliage:run:dev web
```

This command will execute the source code located in your [`src`](./src) folder. The code will be automatically compiled on the fly and the app will be automatically restarted everytime a change is detected.

To see you application working, you can run a web browser and go to [`http://localhost:8080`](http://localhost:8080)

### Build

```
yarn alliage:build
```

This command will generate a [`dist`](./dist) folder containing the compiled version of your source code.

### Run in production mode

```
yarn alliage:run web
```

This command will execute the compiled code located in the [`dist`](./dist) folder.

## Tests

### Unit tests

The unit tests files can be located at any level of the [`src`](./src) folder. They must be inside a `__tests__` folder and their name must end with `.test.ts`.

To run them, use the following command:

```
yarn test:unit
```

### Integration tests

The integration tests are located in the [`integration-test`](./integration-tests/) folder.

To run them, use the following command:

```
yarn test:integration
```
