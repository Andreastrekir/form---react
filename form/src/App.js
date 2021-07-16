import './App.css';
import React from 'react';
//import File from './components/file';

class MyForm extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    firstname: '',
    lastname: '',
    age: '',
   
  };
}

componentDidMount(){
  //fetch('/http://localhost:3001/?firstname=&lastname=&age=30')
  fetch('/http://localhost:3001/')
  .then(data => data.json())
  .then(json =>{
    this.setState({
      subreddits: json,
    })
  })
}



myChangeHandler = (event) =>{
  let firstname = event.target.firstname;
  let lastname = event.target.lastname;
  let val = event.target.value;
  this.setState({[firstname]: val});
}


render() {
  return(
    <form onSubmit={this.mySubmitHandler}>
    <h1>Sample Form {this.state.firstname} {this.state.lastname} {this.state.age}</h1>
    Enter your First Name:
    <input
      type='text'
      name='firstname'
      onChange={this.myChangeHandler}
    />
     <br/>Enter your Last Name:
    <input
      type='text'
      name='lastname'
      onChange={this.myChangeHandler}
    />
    <br/>Enter your Age:
    <input
      type='text'
      name='age'
      onChange={this.myChangeHandler}
    />
    <br/>
    <br/>
    <p>Select your destination</p>
    <select value={this.state.mydestination} id= "destination">
      
          <option value ="Destination" >-- Please choose a destination --</option>
            <option value ="Thailand">Thailand</option>
            <option value ="Japan">Japan</option>
            <option value ="Brazil">Brazil</option>
          </select>
  <div>
    <br/>
    <p>Dietary restrictions:</p>
    <input type="checkbox" id="scales" name="scales" value={this.state.dietaryRestric}></input>
      <label for="scales">Nuts free</label><br/>
      <input type="checkbox" id="scales" name="scales"></input>
      <label for="scales">Lactose free</label><br/>
      <input type="checkbox" id="scales" name="scales"></input>
      <label for="scales">Vegan</label><br/>
  </div> 
          <br/><br/>
    <button type='submit'>Submit</button>

    </form>
  );
}
}
export default MyForm;

