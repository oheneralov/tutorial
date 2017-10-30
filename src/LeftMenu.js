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
		  data = ["Home", "Introduction", "About"];
		  let listItems = data.map((item) => 
	      <li key={item}><a href="">{item}</a></li>);
		  self.setState({'leftMenu': listItems});
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
      <div className="leftmenu"><ul style={{listStyle:"none"}}>{this.state.leftMenu}</ul></div>
    );
  }
}

export default LeftMenu;
