import React, { Component } from 'react';

const todo = []

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: '',
      complete: false
    }
  }
  handleSubmitEvent(event){
    event.preventDefault()
    console.log(event.target);
    // addstate to 
  }
  handleChange(event){
    console.log(event.target.value);
    // setstate
  }

  render() {
    return(
      <div>
      <h3>Add a todo</h3>
      <form onSubmit= {(event) => this.handleSubmitEvent(event)}>
      <input type="text" placeholder="Add your todo" onChange={this.handleChange}/>
      <button type="submit">+</button>
      </form>
      </div>
    )
  }
}

export default Add
