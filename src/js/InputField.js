import React from 'react';
import './css/InputField.css'

class InputField extends React.Component
{
	constructor(props) {
    super(props);
    this.state = { text_mes : ''};
  	this.handleInput = this.handleInput.bind(this);
  	this.handlePress = this.handlePress.bind(this);
  	}
    

  	handleInput(event){
  		  this.setState({text_mes : event.target.value})
  	}

  	handlePress(event){
  		if (event.key == "Enter"){
  		//this.setState({text : "" });
  	    }
  	}

    render(){
    	const tt=this.state.text_mes;
    	return(
    		<header>
          <div> 
    			    <textarea type="text" value={this.state.text} onChange={this.handleInput}
                  wrap="soft"
                  className="InputField"
              />
    		  </div>
            <textarea type="text" value={tt}
                  wrap="soft"
                  className="text"
                  readonly="readonly"
              />
    	  </header>///
      );
    }
}

export default InputField;