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
  	}

  	handlePress(event){
  		if (event.key == "Enter"){
           this.setState({mess_id : this.state.mess_id+1});
           this.mesege.push(event.target.value);
           event.target.value='';
  	   }
  	}

    render(){
    	const tt= this.mesege.map( (v) =><h1> {v} </h1>); ///
    	return(
    		<header>
          <div> 
    			    <textarea type="text" 
                  value={this.state.text}  
                  onKeyDown={this.handlePress} 
                  onChange={this.handleInput}
                  wrap="soft"
                  className="InputField"
              />
    		  </div>    
          <div className="textField">
              {tt}
          </div>
    	  </header>///
      );
      this.map.clear();
    }
}

export default InputField;