import React from 'react';
import './css/clock.css';

class Clock extends React.Component
{
	constructor(props) {
      super(props);
      this.state = {value: new Date().toLocaleTimeString(),
      				date:  new Date().toLocaleDateString()	
      				};
    }

    update() {
    	this.setState({value: new Date().toLocaleTimeString(),
    					date: new Date().toLocaleDateString()
    					});
    }

    componentDidMount() {
      this.clockID = setInterval(() => this.update(), 0.001);
    }

    componentWillUnmount() {
      clearInterval(this.clockID);
    }

    render(){
    	const value = this.state.value;
    	const date = this.state.date;
    	return(
    			<div className="clock"> 
    			 	<div>{value}</div>  
    			 	<div>{date} </div> 
    			</div>///
    		);
    }
}

export default Clock;