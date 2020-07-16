import React from 'react'

class GifSearch extends React.Component{

  state = {
    query: ''
  }

  inputHandler = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = event => {

  event.preventDefault()
  let query = this.state.query
  this.props.fetchMe(query)
}

  render(){

    return (
      <div>
        <form onSubmit={ this.handleSubmit}>
          <label>Enter a Search Term</label>
          <input onChange={this.inputHandler} value={this.state.query} type="text" name="input"/>
          <button type="submit">Find Gifs</button>
        </form>
      </div>
    )
  }
}

export default GifSearch
