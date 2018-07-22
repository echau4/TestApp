import { Names } from '../import/api/database'; 

Meteor.publish('names', function(){
    return Names.find();
});
