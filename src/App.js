import React, { useState } from "react";


const App = () => {

  const [fullName, setFullName] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: ''
  });


  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const {name, value} = event.target;
    setFullName((preValue) => {
        console.log(preValue);
        return {
          ...fullName,
          [name]: value
        }
    });
  };


  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted!");
  }
  return(
    <>
      <div className="main_div">
        <form onSubmit = {onSubmit}>
          <div>
          <h1> Hello {fullName.fName} {fullName.lName} </h1>
          <h2 style = {{color: 'black'}}> {fullName.email} </h2>
          <input type = "text" placeholder = "Enter Your First Name" 
            name = 'fName'
            onChange = {inputEvent}
            value={fullName.fName}
          />
          <br />
          <input type = "text" placeholder = "Enter Your Last Name" 
            name = 'lName'
            onChange = {inputEvent}
            value={fullName.lName}
          />
          <br />
          <input type = "email" placeholder = "Enter Your Email" 
            name = 'email'
            onChange = {inputEvent}
            value={fullName.email}
          />
          <br />
          <input type = "number" placeholder = "Enter Your Phone number" 
            name = 'phone'
            onChange = {inputEvent}
            value={fullName.phone}
          />
          <button type = "submit"> click me </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;