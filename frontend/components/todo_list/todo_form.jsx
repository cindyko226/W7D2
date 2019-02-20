import React from 'react'
import uniqueId from '../../util/uniqueId'


class TodoForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        id: uniqueId(),
        title: "",
        body: "",
        done: false
      }
      this.updateBody = this.updateBody.bind(this)
      this.updateTitle = this.updateTitle.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.receiveTodo(this.state);
      this.setState({
        id: uniqueId(),
        title: "",
        body: "",
        done: false
      })
    }

    updateTitle(e) {
      this.setState({title: e.currentTarget.value})
    }

    updateBody(e){
      this.setState({ body: e.currentTarget.value })
    }

    render(){
      console.log(this.state)
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <br></br>
            <input type="text" onChange= {this.updateTitle} value={this.state.title}/>
          </label>
          <br></br>
          <label>Body:
            <br></br>
            <input type="text" onChange={this.updateBody} value={this.state.body} />
          </label>
          <br></br>
          <button type="submit">Create Todo!</button>
        </form>
      )
    }
}

export default TodoForm;