# ngOutpost
Ng-Outpost is an Angular module to interact with the Muller Avenue Group Outpost API. 


## Getting started

npm:

    npm install ng-outpost

bower: 

    bower install ng-outpost



#### Configuring


In your angular application, you must have an `APP` contstant set up with the following properties:

    API_KEY: '<your api key for outpost>',
    APP_NAME: '<your application name>'


include `ngOutpost` in your main app file. 
inject `NgOutpostFactory`into the controller that you wish to record messages. 


## Usage


#### Methods

The module comes with one factory `NgOutpostFactory` that have three methods.

    NgOutpostFactory.getMessages();
    NgOutpostFactory.createMessage();
    NgOutpostFactory.deleteMessage();
