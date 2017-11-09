import React, { Component } from 'react';
import $ from './thirdparty/jquery-3.2.1.js'

class LeftMenu extends Component {
  constructor(props){
	  super(props);
	  this.state = {leftMenu: ""};
	  this.loadContent = this.loadContent.bind(this);
  }
  
  loadContent(event){
	  //default value
	  var contentUrl = "Home";
	  if (event != null){
		  contentUrl = $(event.target).text();
	  }
	  
	  var self = this;
	  $.get('backend/content/' + contentUrl, function(content){
		  $(".content").empty();
		  var text = JSON.parse(content);
		  console.log(text);
		  $(".content").append(text[0].content);
		  self.setState();
	  })
	  .done(function() {
         console.log( "Content is loaded!" );
       })
       .fail(function() {
         console.log( "error loading content" );
       })
      .always(function() {
         console.log( "finished loading content" );
      });
  }
  
  componentDidMount(){
	  var self = this;
	  $.get('backend/leftmenu', function(menuData){
		  var menu = ["Data types", "Regular expressions", "Arrays", "Classes", "Database"];
		  try{
			  
		      menu = JSON.parse(menuData);
			  console.log(menu);
		  }
		  catch(e){
			  console.log("Error! Unable to load data for menu!");
			  console.log(e.message);
			  
		  }
		  let listItems = menu.map((item) => 
	      <li key={item.menu}><button onClick={self.loadContent}>{item.menu}</button></li>);
		  self.setState({'leftMenu': listItems});
	  })
	   .done(function() {
         console.log( "Connection successful!" );
		 self.loadContent(null);
       })
       .fail(function() {
         console.log( "error getting menu!" );
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
