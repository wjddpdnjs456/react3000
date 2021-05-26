import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
  return date.toLocaleDateString();
}
function Avatar(props){
    return(
      <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    )
  }
function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div>{props.user.name}</div>
      <div>UserInfo</div>
    </div>
  )
}
function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-text">{formatDate(props.date)}</div>
    </div>
  )
}
const comment ={
  date: new Date(),
  text: "열심히 할수록 기회는 따른다.",
  author: {
    name: "yewon",
    avatarUrl:"http://yewon5184.dothome.co.kr/portfolio/assets/imges/aboutImg01.jpg"
  },
};
ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author}/>, document.getElementById("root"));