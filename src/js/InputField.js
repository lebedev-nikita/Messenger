import React from 'react';
import './css/InputField.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { animateScroll } from "react-scroll";

class Mesenger extends React.Component
{
    constructor(props) {
    super(props);
    this.state = { maybe_i_need_it : ''};
    this.meseges = new Array();
    }

    render(){
      return(
          <InputField data={this.meseges}/> 
      );
    }
}

class InputField extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { text_mes : ''  };
  	this.handleInput = this.handleInput.bind(this);
  	this.handlePress = this.handlePress.bind(this);
    this.mesege = this.props.data;
  	}

  	handleInput(event){
  		  this.setState({text_mes : event.target.value})
        this.setState({text : event.target.value})
  	}

  	handlePress(event){
  		if (event.key == "Enter"){
           this.setState({mess_id : this.state.mess_id+1});
           this.mesege.push(event.target.value);
          event.target.value=''; 
  	   }
  	}

    render(){
      return(
    		<div className="ChatBox">
    			    <div className="InputFieldOuter">
              <textarea 
                type="text" 
                onKeyDown={this.handlePress} 
                onChange={this.handleInput}
                wrap="soft"
                className="InputFieldInner"
              />
              </div>
              <OutField data={this.mesege}/>
    	  </div>
      );
    }
}

class OutField extends React.Component
{
  constructor(props){
    super(props);
    this.state = {some : ''};
    this.mesege = this.props.data;
  }
  render(){
    const tt= this.mesege.map( (v) => <p className="Messege"> {v} </p>   );
    return(
      <div id="rrr" className="TextField">
        {tt}
      </div> 
    );
  }  
}

export default Mesenger;