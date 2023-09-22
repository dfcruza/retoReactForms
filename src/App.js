import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {

  const [errorMessage, setErrorMessage] = useState({email: false, password: false});

  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"});

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    if(!e.target.value.contains("@")){
      setErrorMessage({...errorMessage, email: false})
      alert("Email is invalid")
    } else { 
      setErrorMessage({...errorMessage, email: true})
      alert("Email is valid")
    }
  });

  const handlePasswordChange = ((e) =>  {
    setFormValues({...formValues, password: e.target.value})
    if(e.target.value.length < 9&& e.target.value.match(/[a-z]/i) && e.target.value.match(/[0-9]/i)){
      setErrorMessage({...errorMessage, password: false})
      alert("Password is not valid")
    }
    else{ 
      setErrorMessage({...errorMessage, password: true})
      alert("Password is valid")
    }
  });

  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = (() => {
    //Call fetch
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailregex.test(formValues.email);
    const isPasswordValid = passwordregex.test(formValues.password);
    if (isEmailValid) {
      setErrorMessage({...errorMessage, email: false})
      alert("Email is valid")
    } else {
      setErrorMessage({...errorMessage, email: true})
      alert("Email is not valid")}
    if (isPasswordValid) {
      setErrorMessage({...errorMessage, password: false})
      alert("Password is valid")
    } else {
      setErrorMessage({...errorMessage, password: true})
      alert("Password is not valid")}
    alert(JSON.stringify(formValues))
  });

 return (
   <div>
     <h1>¡Ejemplo de formularios!</h1>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email"/>
       <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
       <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Label>Favorite Class</Form.Label>
       <Form.Select>
         <option value="1">ISIS3710</option>
         <option value="2">Programación con tecnologias web</option>
       </Form.Select>
     </Form.Group>
     <Button variant="primary" onClick={clickSubmit}>
       Submit
     </Button>
   </Form>
   </div>
 );
}


export default App;
