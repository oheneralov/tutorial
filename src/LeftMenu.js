import React, { Component } from 'react';
import $ from './thirdparty/jquery-3.2.1.js'

class LeftMenu extends Component {
  constructor(props){
	  super(props);
	  this.state = {leftMenu: ""};
  }
  componentDidMount(){
	  var self = this;
	  $.get('backend/leftmenu', function(data){
		  //data = ["one", "two", "three"];
		  self.setState({'leftMenu': data});
	  })
	   .done(function() {
         console.log( "Connection successful!" );
       })
       .fail(function() {
         console.log( "error" );
       })
      .always(function() {
         console.log( "finished" );
      });
	  
  }
  render() {
    return (
      <div className="leftmenu">{this.state.leftMenu}</div>
    );
  }
}

export default LeftMenu;
