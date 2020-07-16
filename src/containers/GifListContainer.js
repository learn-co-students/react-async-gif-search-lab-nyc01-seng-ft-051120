import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

  state = {
    gifs: []
  }

  componentDidMount(){
    this.fetchMe()
  }

  fetchMe = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: data.data

      })
    })
  }



  render(){
  console.log(this.state.gifs)
    return (
      <div>
      <GifSearch fetchMe={this.fetchMe} />
        <GifList gifs={this.state.gifs}  />

      </div>
    )
  }

}

export default GifListContainer
