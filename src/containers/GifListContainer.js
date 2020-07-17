
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    onSubmitHandler = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(imageData => {
            this.setState({gifs: [imageData["data"][0]["images"]["original"]["url"], imageData["data"][1].images.original.url, imageData["data"][2].images.original.url]})
        })
        .catch(error=>alert(error))
           

    }
    render(){
        return (
            <div>
                <GifSearch onSubmitHandler={this.onSubmitHandler}/>
                <GifList gifs={this.state.gifs}/> 
            </div>
        )
    }
    
}

export default GifListContainer