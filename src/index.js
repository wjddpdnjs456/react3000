import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App(){
  return(
    <div>
      <Welcome name="jung" />
      <Welcome name="ye" />
      <Welcome name="won" />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
//render는 출렷한다는 뜻






