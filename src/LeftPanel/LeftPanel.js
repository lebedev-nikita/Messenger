import React from 'react';
import './LeftPanel.css';

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
				<p> Some </p>
			</div>
		);
	}
}

class LeftPanelBottom extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"tsize" : "1", "value" : "kjlkjkl"}
		this.evhandler=this.evhandler.bind(this);
		this.evchange=this.evchange.bind(this);
		this.evkey=this.evkey.bind(this);
		this.entdown=this.entdown.bind(this);
	}

	evhandler(event){
		this.setState({"tsize" : "5"});
	}

	evchange(event){
		this.setState({"tsize" : "5"});
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
		return(
			<div className="LeftPanelBottom">	
				<textarea placeholder="Please input name of chanel :D"
				wrap="on" rows={this.state.tsize} onClick={this.evhandler} onChange={this.evchange}
				onKeyUp={this.evkey} onKeyDown={this.entdown} onScroll={this.evhandler} 
				className="LeftPanelBottomTextarea">  
				</textarea>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAACcnJzZ2dmampr5+fna2tqfn59PT09UVFT8/PwEBARRUVFMTEz09PTo6OgeHh4lJSV4eHgUFBQ5OTnh4eFjY2OEhITu7u5dXV0PDw/Jyclvb2+0tLRDQ0P5o4h/AAAD60lEQVR4nO2djVajMBCFBRft4n/Vult13/8xXUppktNQIGT+cu73AuM9vZcMnYy9ugIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBi2ifR8o/k5evn6uWbusg429fq7Zq0Ql11/CKtMU7zcCj/Tliifa4EJTa/++pbwhpP1ZGasMgY7f2x+I6yyougxM1Q+4OyyvdQhd2ozUng/g9poVpI4pDB/9wQl3ISWY36cCpLe1h03Ap8iu2GUaCERM+iHAL5s9hyC2TPIq9FeziN2riHDPVT1IfPqOwZHGAz6r2QQDaJEhkc4Mhic/oE7/gFcmSRsVWLQ25UzlYtDq1RmVu1OJQSxY6JELosCrRqcciyqMGiPTRGda3ancxT1IfCqEoyOEBgVD0W7cktUcUxEZI3i41csz1Oziy20q1anIxGlW/V4uQyaqtVYC6Jyo6JkBxGbTU+ZBwZJOo7JkLWGtUNXxS0anHWHRrib/RzWGVU7RbtSZeosFWLk5pFla1anLQsKm3V4iQZ1YpFe5YbVWj4ks5So6pu1eIsNKqdh4xjkURbGRyYn0Xh4Us6c7NoolWLM9Ooel94p5ljVDOtWpxpiQaPiZCpLKoZvqQzkUXbFu25ZFRVw5d0xo1qPoMDo0a12KrFiUs0fkyExLJotlWLc55Fw61anDOjWm7V4oRGLSqDA77EYo6JEM+of4sU6EssVKBv1OMxUcZT1Kcu+xPsqEsX6Bt1X55FOxr3FK1upf8YCrw3+kpu0ZaSTRUgsYVKijd8KfNTdK3avkyJ3j2ZG/dELcmowduE0BYqJd49mcNBL7GFSsr5G73UujQVkTf6oowaf6MvyKhjb/TFSBwfvpSSxQtfOhWRxcvDlwKMOvWtmn2jTg5frBt1xhe/piXOG74YzuLc4YvdLM4evhg16pLhi0mjLhu+GJS4dPPFnlEXzweNSUzZfDFl1LQBqKVDI3GEbcao6TN6IxLXbL6YyOK6zRcLWVx5T0a9UdvVmy/KjZrjnoxqo+ZZUtZs1ExXudRKzLekrDSLOa9T6sxi1uuUCo2a+zqlOqPmv06pTCLF5ouuLJLc+FWURaolZTVGpbvSrMWohJsvOoxKeutegUTqzRfxLNJvvkhnkWHzRdSoPJsvgkbl2nwRk8i3pCyVRcblLJEs8i4pCxiVe/uM36js+4PMRpVYkGSVKPNvxxizKPVvx/iyKLak7CTS7kxtZT7BDmfUT8Iqj69iAr1P8YuwyOnXAUUWJAeJpL8O+CYo8CSR9MS47irIbYAesvivJa3xvt190P7+4EU+v3Y1rUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACs4gdR1xkzUSKuXQAAAABJRU5ErkJggg=="
				className="LeftPanelBottomImage"
				align="right"
				/> 

			</div>
		);
	}
}

class LeftPanelChanel extends React.Component
{
	render(){
		return(
			<div className="LeftPanelChanel">	
			</div>
		);
	}
}


export default LeftPanel;
