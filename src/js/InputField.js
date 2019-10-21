import React from 'react';
import './css/InputField.css'


class InputField extends React.Component
{

  constructor(props) {
    super(props);
    this.state = { text_mes : '', mess_id : 0 };
  	this.handleInput = this.handleInput.bind(this);
  	this.handlePress = this.handlePress.bind(this);
    this.mesege = new Array();
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
    	const tt= this.mesege.map( (v) => <p className="Messege"> {v} </p> ); ///
      return(
    		<div className="ChatBox">
          
          <div className="TextField">
            {tt} 
          </div>/// 
          
          <div className="InputFieldOuter">
  			    <textarea 
              className="InputFieldInner"
              type="text" 
              onKeyDown={this.handlePress} 
              onChange={this.handleInput}
              wrap="soft"
            />
          </div>

    	  </div>///
      );
      this.map.clear();
    }
}

export default InputField;