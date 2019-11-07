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
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <div className="MiddlePanelBottom">
                </div>
            </div>
        );
    }   
}

class Message extends React.Component
{

    render(){
        return(
            <div className="Message">
                <div className="MessageHeader"> </div>
                <div> hello </div>
            </div>
        );
    }
}

export default MiddlePanel;
