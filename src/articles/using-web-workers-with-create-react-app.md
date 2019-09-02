---
title: 'Using Web Workers with Create React App'
date: '2019-08-21'
published: true
---

## Setting up your project

Out of the box, Web Workers are somewhat cumbersome to use in modern front-end development workflows. Your Web Worker needs to live in a JavaScript file of it's own, separated from your application bundle. This means that in order for your Web Workers to handle nontrivial tasks (such as importing `npm` modules), your bundler needs to be aware of your Workers and output them as separate JavaScript bundles.

This itself is a somewhat complex topic. In order to keep this example simple we will make use of Create React App, an excellent tool that allows you to write React applications without worrying about build configuration. Let's create a React application with CRA in a directory of your choice:

```
npx create-react-app cra-web-worker-example
```

In order to make Create React App play nicely with Web Workers, we will make use of a tool called `react-app-rewired` to allow us to slightly modify Create React App's default configuration. Alongside this, we will need to use `worker-loader`. Create React App uses Webpack under the hood to bundle your application's assets, and Webpack makes use of loaders to process different assets in ways tailored to them. If you are interested, you can read more about loaders on [Webpack's official documentation site](https://webpack.js.org/loaders/).

### Installing dependencies

First, let's install the packages that we need. From the command line, navigate to your newly-created React application and run the following:

```
$ npm install --save-dev react-app-rewired worker-loader
```

Next, create a file called `config-overrides.js` in the root directory of your application and add the following code to it:

```js
module.exports = function(config) {
  config.output.globalObject = 'this';
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: {
      loader: 'worker-loader'
    }
  });
  return config;
};
```

This means that any files in your `src` directory with a filename matching the signature of `*.worker.js` will be processed as a Web Worker.

## A basic example

Now that we have our build process set up, let's take Web Workers for a ride. Before we do anything preposterous, we can start with a "hello world" example. We can create a new worker called `hello.worker.js`:

```js
// hello.worker.js

/* eslint-disable no-restricted-globals */
function handleMessage() {
  setTimeout(() => {
    self.postMessage(`Pong!`);
  }, 3000);
}

self.addEventListener('message', handleMessage);
```

The main script and a worker that it instantiates can communicate with one another using the `postMessage` method, much like an `iframe`. We can listen for `message` events to handle incoming messages.

In our React app, we can post a message to our worker to make sure that it's, well, working.

```js
// App.js

import React, { useState, useEffect } from 'react';
import HelloWorker from './hello.worker';
import './App.css';

function App() {
  const [reply, setReply] = useState();

  useEffect(() => {
    const worker = new HelloWorker();
    worker.addEventListener('message', e => setReply(e.data));
    worker.postMessage('Ping...');
  }, []);

  return (
    <div className="App">
      <h1>{reply || '...'}</h1>
    </div>
  );
}

export default App;
```

After a 3000ms timeout, our worker posts a message back to our main "thread", which triggers our event listener's callback function and sets our `reply` state. As a result, we get a displayed on our page. Hooray, it works! But this isn't very useful yet... let's look at a couple of different ways we can use Web Workers to give our app superpowers.

## Expensive data querying

Suppose you are building a typeahead search component. If you are lucky you are working with an API that allows you to query the data on the server. However, this is not always the case and occasionally you have to implement a solution in your client application that performs a typeahead search on a large amount of data fetched from one or more APIs.
