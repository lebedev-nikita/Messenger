import React from 'react';
import './App.css';

function App() {
  return (
  <div className="HelloWorld">
   Hello World
    <NavigationBox />
    <ChatBox />
    <RightBox/>
  </div>
  );
}

class NavigationBox extends React.Component
{
  render(){
    return(
      <div className="NavigationBox">
        <NavigationBoxHeader/>
        <div className="ChannelList">
          <Channel name="Chat 1" image="data:image/png;base64,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"/>
          <Channel name="Chat 2" image="https://thumbs.dreamstime.com/z/wild-hedgehog-vector-icon-wild-hedgehog-vector-icon-filled-flat-sign-mobile-concept-web-design-cute-hedgehog-walking-glyph-140554839.jpg"/>
          <Channel name="chat 3" image="https://www.meme-arsenal.com/memes/299f9526f662c71f1e3d0deb21bb9498.jpg"/>
          <Channel name="chat 4" image="https://avatars.mds.yandex.net/get-pdb/1648099/57866959-a433-4bf7-885d-f7815c3029e8/s375"/>
          <Channel name="chat 5" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1qtutkE5iDvWk-8uWLAnGGXmw69r3xLfZQKaNdttnK80Ia8K&s"/>
          <Channel name="chat 6" image="http://avatarkamix.ucoz.ru/_ph/10/2/110858068.jpg"/>
          <Channel name="chat 7" image="https://klike.net/uploads/posts/2018-06/1528377375_1.jpg"/>
          <Channel name="chat 8" image="http://img.noobzone.ru/getimg.php?url=http%3A%2F%2Fs017.radikal.ru%2Fi411%2F1205%2F46%2Fc0595e45e959.jpg"/>
          <Channel name="chat 9" image="https://skastuffing.appspot.com/kak-sdelat-sebe-avatar-dlia-stima/img_0.jpg"/>
          <Channel name="chat 10" image="https://slovami.net/wp-content/uploads/2018/04/6-37.jpg"/>
          <Channel name="chat 11" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh9wsTAeopcEdE58pitKl1les4uj3JERDsJfzOdnHytpK4_7nAQ&s"/>
          <Channel name="chat 12" image="http://img.bibo.kz/11962/11962201.JPG"/>
          <Channel name="chat 13" image="http://i.imgur.com/Ax0Kfaj.jpg"/>
          <Channel name="chat 14" image="https://nashkomp.ru/wp-content/uploads/2017/01/0-2.jpg"/>
          <Channel name="chat 15" image="https://mixpix.in/post_imgs/2015/04/10/141025/00006.jpg"/>
          <Channel name="chat 16" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BuGR0VbfXeQf3aKh0B3ospOU1t6EYo1eUCh4UJ32oWUE7x7kQw&s"/>
          <Channel name="chat 17" image="https://www.meme-arsenal.com/memes/6eb132f3c654c3ac09f8a195c38139dd.jpg"/>
          <Channel name="chat 18" image="https://birds-piggies.ru/uploads/posts/2016-12/1482931343_avatarki-angry-birds-1.jpg"/>
          <Channel name="chat 19" image="https://wordpressmania.ru/wp-content/uploads/2015/04/avatarki-wordpress.png"/>
          <Channel name="chat 20" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGtETaQEYX0FS-gT0L8UNB3gfYMUDZ4ueAv7UgvX_ApbU-o8Nog&s"/>
        </div>
      </div>
    );
  }
}

class ChatBox extends React.Component
{
  render(){
    return(
      <div className="ChatBox">
        <ChatHeader/>
        <ChatInput/>
        <ChatMessageBox/>
      </div>
    );
  }
}

class RightBox extends React.Component
{
  render(){
    return(
      <div className="RightBox">
      </div>
    );
  }
}

class ChatHeader extends React.Component
{
  render(){
    return(
      <div className="ChatHeader">
        <h1 className="ChatHeaderName"> CHAT NAME </h1>
        <ChatHeaderSearch/>
      </div>
    );
  }
}

class ChatHeaderSearch extends React.Component
{
  render(){
    return(
      <div className="ChatHeaderSearch">
      </div>
    );
  }
}






class ChatInput extends React.Component
{
  render(){
    return(
      <div className="ChatInput">
        <textarea className="InputTextArea"/>
         <img src="http://s1.iconbird.com/ico/2013/9/452/w512h5121380476977paperplane.png"  
         className="ChatInputFly" />
      </div>
    );
  }
}

class ChatMessageBox extends React.Component
{
  render(){
    return(
      <div className="ChatMessageBox">
      </div>
    );
  }
}

class Channel extends React.Component
{
  constructor(props)
  {
     super(props);
     this.name = this.props.name;
     this.image = this.props.image;
  }

  render(){
    return(
      <div className="Channel">
        <div className="ChannelTextBlock"> 
            <p> {this.name} </p>
            <img src={this.image}  className="ChannelImageBlock" /> 
        </div>
      </div>
    );
  }
}

class NavigationBoxHeader extends React.Component
{
  render(){
    return(
      <div className="NavigationBoxHeader">
        <NavigationBoxSearch/>
        <img src="https://img.icons8.com/carbon-copy/452/double-down.png"  className="NavigationBoxBT" />
        <img src="http://pngimg.com/uploads/plus/plus_PNG92.png" 
         className="NavigationBoxpp" /> 
      </div>
    );
  }
}

class NavigationBoxSearch extends React.Component
{
  render(){
    return(
      <div className="NavigationBoxSearch">
        <p className="NavigationBoxLupa">🔍</p>
      </div>
   );
  }
}

export default App;
