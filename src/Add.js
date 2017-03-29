import React, { Component } from 'react';

// const todo = []

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["laundry", "shopping"],
      post: '',
      complete: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    const target = event.target
    const value = target.value
    this.setState({
      post: value
    })
  }
  handleSubmitEvent(event){
    event.preventDefault()
    this.setState({
      list:  this.state.list.concat([this.state.post]),
      post: ''
    }, () => {
      console.log(this.state.list);
      let form = document.getElementById('textbox')
      form.reset()
    })
  }

  render() {
    // console.log(this.state.list);
    let print = this.state.list.map((item, index) => {
      return(
        <div key={index}>
        <p>{item}</p>
        </div>
      )
    })
    return(
      <div>
      <h3>Add a todo</h3>
      <form id="textbox" onSubmit= {(event) => this.handleSubmitEvent(event)}>
      <input type="text"  placeholder="Add your todo" onChange={this.handleChange}/>
      <button type="submit">+</button>
      </form>

        {print}

      </div>
    )
  }
}

export default Add
