import React from 'react'

class GifSearch extends React.Component {
    state={
        search: ''
    }

    searchField = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.onSubmitHandler(this.state.search)

    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <label>
                    Search:
                    <input type="text" name="search" value={this.props.search} onChange={this.searchField} />
                </label>
            </form>
        )
    }


}

export default GifSearch