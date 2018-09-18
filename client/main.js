import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import "./main.html";
import App from "../app/App";
import Names from "../import/api/database";

Meteor.startup(() => {
  render(<App />, document.getElementById("render-target"));
});

if(Meteor.isClient){
  Template.form.helpers({
    people: function(){
      return Names.find();
    }
  });
}
