import { Meteor } from 'meteor/meteor';
import '../import/api/database';

Meteor.startup(() => {
  // code to run on server at startup
});


if(Meteor.isServer) {
	//- Ref: https://atmospherejs.com/votercircle/winston
	//- Setup Winston logging

  var consoleOptions = {
	    colorize: true,
	    level: 'debug',
	    levels : {debug: 0, info : 1, warn: 2, error: 3},
	    colors : {debug: 'blue', info : 'green', warn: 'orange', error: 'red'},
	    handleExeptions: true,
	    humanReadableUnhandledException: true,
	};

	// Add & configure the console transport 
	logger.addTransport('console', consoleOptions);

	Meteor.methods({
	  logToServerConsoleDebug: function(msg) {
	    logger.debug("(CLIENT) "+msg);
	  },
	  logToServerConsoleInfo: function(msg) {
	    logger.info("(CLIENT) "+msg);
	  },
	  logToServerConsoleWarn: function(msg) {
	    logger.warn("(CLIENT) "+msg);
	  },
	  logToServerConsoleError: function(msg) {
	    logger.error("(CLIENT) "+msg);
	  },
	});
}

if(Meteor.isClient) {
	logger = {
		debug: function(msg) {
			Meteor.call('logToServerConsoleDebug', msg);
		},
		info: function(msg) {
			Meteor.call('logToServerConsoleInfo', msg);
		}, 
		warn: function(msg) {
			Meteor.call('logToServerConsoleWarn', msg);
		},
		error: function(msg) {
			Meteor.call('logToServerConsoleError', msg);
		},
	};
}