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
    		<div className="ChatBox"> /* внутри этого блока находятся составляющие чата: 
                                     поле для ввода и поле с сообщениями */
          
          <div className="TextField">
            {tt} 
          </div> 
          
          /* 
            Далее костыль: 
            Ширина textarea всегда выравнивается по количеству символов, 
            которые помещаются в одной ее строке (cols).
            Из-за этого невозможно задать ей ровно ту ширину, которую нужно - она всегда
            будет либо немного торчать из-за края блока, либо недоходить до него.
            Чтобы сгладить этот недочет, делаем так: нужную площадь закрашиваем
            при помощи InputFieldOuter, а саму textarea помещаем внутрь этого участка, 
            устанавливая width = 90% и отключая обводку границ (см. InputFieldOuter). 
          */
          <div className="InputFieldOuter"> 
  			    <textarea 
              className="InputFieldInner"
              type="text" 
              onKeyDown={this.handlePress} 
              onChange={this.handleInput}
              wrap="soft"
            />
          </div>
          /* конец костыля */

    	  </div>
      );
      this.map.clear();
    }
}

export default InputField;