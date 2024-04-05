import './App.css';

function App(props) {
  return (
<div style={{"paddingTop": "10px","paddingLeft": "10px"}}>
<img style={{"borderRadius":"50%" ,"width":"70px","height":"70px","padding":"7px","border":"2px solid orange" }} src={props.image}  alt="story_image"/>
<p style={{"margin":"0","marginLeft":"18px"}}>{props.name}</p>

</div>
  );
}

export default App;