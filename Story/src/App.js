import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
  <>
  <div style={{"backgroundColor":`${props.color?props.color:"black"}`,"padding":"2px","marginTop":"10px"}}>
    <p  style={{"color":"white","fontsize":"10px"}}>{props.title}</p>
  </div>
  <div style={{"backgroundColor":"grey","padding":"10px"}}>
    <p  style={{"color":"white","margin":"0px","fontsize":"10px","padding":"0px"}}>{props.content}</p>
  </div>
  </>
  );
}

export default App;
