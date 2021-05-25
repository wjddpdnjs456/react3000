import React from 'react';
import ReactDOM from 'react-dom';


function formatDate(date){
  return date.toLocaleDateString();
}//이건함수

function Comment(props){
  return(
    <div className="comment">
        <div className="user-info">
          <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
          <div className="user-name">{props.author.name}</div>
        </div>
        <div className="comment-text">{props.text}</div>
        <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}//이건 컴퍼넌트

const comment ={
  date: new Date(),
  text: "열심히 할수록 기회는 따른다.",
  author: {
    name: "yewon",
    avatarUrl:"http://yewon5184.dothome.co.kr/portfolio/assets/imges/aboutImg01.jpg"
  },
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author= {comment.author}/>, document.getElementById("root"));
//render는 출렷한다는 뜻






