# fsjs-assignment2
Assignment 2 in full stack javascript

Learning goals:<br>
Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat<br>
- It's fast and easy to setup a working app with node.js 
- It's also easy to setup and add middleware
- It's a good thing that you can use same language in front and backend
- Way easier to set up webserver and API's (a lot less code is required)

Explain the difference between Debug outputs and ApplicationLogging. What’s wrong with console.log(..) statements in our backend code.<br>
- The debugger allows for us to step into a function and see how it behaves step by step. With console.log(..) statments, you have to type in manually and also remember to remove the log statements again. 
<br>
Demonstrate a system using application logging and environment controlled debug statements.<br>
- See code in repo.
Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript/Typescript + relevant packages <br>
- Plenty of examples in repo
Explain a setup for Express/Node/Test/Mongo-DB development with Typescript, and how it handles "secret values",  debug and testing.<br>
- Plenty of examples in repo
<br>

Explain, using relevant examples, the Express concept; middleware.<br>
- Middleare function have access to the req and res object and the next function, which is a function in the express router which executes middleware that comes after the current middleware, when invoked. 
Middleware can do the follwing:
- End request response cycle
- Call next middleware in the stack
- Execute any code
- Make changes to req and res objects

Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express  + TypeScript and demonstrate how you have tested the API.<br>
- plenty of examples in repo
Explain, using relevant examples, how to test JavaScript/Typescript Backend Code, relevant packages (Mocha, Chai etc.) and how to test asynchronous code.<br>
- plenty of examples in repo
<br><br>
NoSQL and MongoDB <br>
Explain, generally, what is meant by a NoSQL database.<br>
      Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.<br>
 Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.<br>
Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere and perhaps also the Unique Index.<br>
Demonstrate, using a REST-API designed by you, how to perform all CRUD operations on a MongoDB<br>
Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)<br>
      Demonstrate, using your own code-samples, decisions you have made regarding → normalization vs denormalization <br>
      <br>
      <br>
Geo-location and Geojson<br>
Explain and demonstrate basic Geo-JSON, involving as a minimum, Points and Polygons<br>
Explain and demonstrate ways to create Geo-JSON test data<br>
Explain the typical order of longitude and latitude used by Server-Side APIs and Client-Side APIs<br>
Explain and demonstrate a REST API that implements geo-features, using a relevant geo-library and plain JavaScript<br>
 Explain and demonstrate a REST API that implements geo-features, using Mongodb’s geospatial queries and indexes.<br>
Explain and demonstrate how you have tested the gameFacade and gameAPI for the game-related parts of the period exercises<br>
