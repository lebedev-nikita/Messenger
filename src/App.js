import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    			 {value}  {date} 
    			</div>///
    		);
    }
}


function App() {
  return (
    <h1> Hello,World!!! </h1>///
  );
}




function AppRender() {
    return(    
        <div className="App">
          <App />
          <Clock/>
        </div>///      
    );
}

export default AppRender;
