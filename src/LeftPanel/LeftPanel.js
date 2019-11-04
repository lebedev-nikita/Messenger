import React from 'react';
import './LeftPanel.css';
import myimage from './cat.png'
import dataJSON from './data.json'
class LeftPanel extends React.Component
{
	render(){
		return (
			<div className="LeftPanel">
				<LeftPanelHeader/>
				<LeftPanelChanel/>
				<LeftPanelBottom/>
			</div>
		);
	}	
}

class LeftPanelHeader extends React.Component
{
	render(){
		return(
			<div className="LeftPanelHeader">	
				
			<a href="https://github.com/lebedev-nikita/Messenger.git" target="_blank" >	<img src={myimage} className="logo" alt="lox" /> </a>
			</div>
		);
	}
}

class LeftPanelBottom extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"tsize" : "1", "color" : "lightgrey"}
		this.evhandler=this.evhandler.bind(this);
		this.evchange=this.evchange.bind(this);
		this.evkey=this.evkey.bind(this);
		this.entdown=this.entdown.bind(this);
	}

	evhandler(event){
		this.setState({"tsize" : "5"});
		this.setState({"color" : "red"});
	}

	evchange(event){
		this.setState({"tsize" : "5"});
		this.setState({"color" : "red"});
		if (event.target.value.length == 0 ) {this.setState({"color" : "lightgrey"});}
	}

	entdown(event){
		if (!event.shiftKey && event.which === 13) {
    event.preventDefault();}
	}

	evkey(event){
		if (!event.shiftKey && event.which === 13){
			this.setState({"tsize" : "1"});

		}
	}

	render(){
		let styles={};
		styles.background = this.state.color;
		return(
			<div className="LeftPanelBottom" style = {styles}>	
				<textarea placeholder="Please input name of channel :D"
				wrap="on" rows={this.state.tsize} onClick={this.evhandler} onChange={this.evchange}
				onKeyUp={this.evkey} onKeyDown={this.entdown} onScroll={this.evhandler} 
				className="LeftPanelBottomTextarea">  
				</textarea>
			</div>
		);
	}
}

function ListItem(props) {
	let arr = null;
	if (props.it.values != "none"){
		return(
			<div>	
			{props.it.name} 
			 <ul>	{props.it.values.map( (i) => (<ListItem it={i} />))} </ul>				
			
			</div>
		);		
	}
	else{
	return(
		<div>{props.it.name}</div>
	);}
}

class LeftPanelChanel extends React.Component
{
	render(){
		return(
			<div className="LeftPanelChanel">
				<div>
      				{dataJSON.map( (i) => (<ListItem it={i} />))}
 			   </div>
			</div>
		);
	}
}


export default LeftPanel;
