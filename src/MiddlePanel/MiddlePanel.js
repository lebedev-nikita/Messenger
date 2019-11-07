import React from 'react';
import './MiddlePanel.css';

class MiddlePanel extends React.Component
{
    render(){
        return (
            <div className="MiddlePanel">
                <div className="MiddlePanelHeader">
                </div>
                <div className="MiddlePanelChat">
                    <Message avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" text="Hello" />
                </div>
                <div className="MiddlePanelBottom">
                </div>
            </div>
        );
    }   
}

class Message extends React.Component
{
    constructor(props)
    {
        super(props);
        this.avatar = this.props.avatar;
        this.name = this.props.name;
        this.time = this.props.time;
        this.text = this.props.text;
    }
    render(){
        return(
            <div className="Message">
                <div className="MessageHeader">
                    <img src={this.avatar} className="MessageAvatar" />
                </div>
                <div> {this.text} </div>
            </div>
        );
    }
}

export default MiddlePanel;
