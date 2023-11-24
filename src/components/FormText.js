import React, {useState} from 'react' 


export default function FormText(props) {
const handelUpClick = () => {
   console.log('UpperCase was clicked'+ text);
   let newText = text.toUpperCase();
   setText(newText)
 }
const handelLoClick = () => {
   console.log('UpperCase was clicked'+ text);
   let newText = text.toLocaleLowerCase();
   setText(newText)
 }
const ClearText = () => {

   let newText = ' ';
   setText(newText)
 }

 const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handelExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}


const handelOnChange = (event) => {
   console.log('On Change');
   setText(event.target.value);
}

    const [text, setText] = useState('');
  return (
    <>
    <div>
    <div className="container" style={{color :props.mode==='dark'?'white':'black'}} > 
    
  
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Enter Text</label>
  <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', 
  color :props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

</div>
  <button className="btn btn-primary mx-1" onClick={handelUpClick} > Convert To UpperCase </button>
  <button className="btn btn-primary mx-1" onClick={handelLoClick} > Convert To LowerCase </button>
  <button className="btn btn-primary mx-1" onClick={ClearText} > Clear Text </button>
  <button className="btn btn-primary mx-1" onClick={handelExtraSpaces} > Reamove Extra Spaces </button>
  <button className="btn btn-primary mx-1" onClick={speak} > Enable Voice </button>

    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(' ').length} words and {text.length} letters </p>
      <p>{0.008*text.split(' ').length} Minutes to read</p>
      <h2>Preview </h2>
      <p>{ text.length>0?text:"Enter something in textbox above to preview it here"} </p>
    </div>
    </div>
    </>
  )
}