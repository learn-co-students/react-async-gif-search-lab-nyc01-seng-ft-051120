import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

  fetchGIFs = (query = "puppies") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=7brfAn1BfjvJjCTHGDOmvEVjWMzraPzg&rating=g&limit=3`
    )
      .then(res => res.json())
      .then(({ data }) => {
        this.setState({gifs: data.map((gif) => ({ url: gif.images.original.url })),
        });
      });
  };

  componentDidMount() {
    this.fetchGIFs();
  }
}

export default GifListContainer;

// fetch gif data
// render sub components
//      GifList
//      first three gif
//              render GifList in ul with li
// receives props,

//      GifSearch
// will render a form
// receive user input
// should receive callback from GifListContainer
