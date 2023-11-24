import React, {useState} from 'react'
import React, {props} from 'react'


export default function TextForm() {
const handelUpClick = () => {
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert('Converted to UpperCase' , "Success")
 }
const handelLoClick = () => {
   let newText = text.toLowerCase();
   setText(newText)
   props.showAlert('Converted to LowerCase' , "Success")
 }
const handelOnChange = (event) => {      // we get a free event object whenever we run an onChange and it is imp if we want to continew typing
   setText(event.target.value);               // by writing this we are able to continew writing on the input box as the value={text}                                             // and the new value is  set to the text

  }

    const [text, setText] = useState('Enter text Here');
  return (
    <div>
  
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">Example text Area </label>
  <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>

</div>
  <button className="btn btn-primary mx-2" onClick={handelUpClick} > Convert To UpperCase </button>
  <button className="btn btn-primary mx-2" onClick={handelLoClick} > Convert To LowerCase </button>
    </div>
  )
}

// logic for number of words -- {text.split(" ").lenght}
// for nuumber of letters --- {text.length}