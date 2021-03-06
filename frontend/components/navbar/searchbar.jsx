import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { pins: null , searchTerm: "" }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({
            searchTerm: e.currentTarget.value
        })
        this.props.searchInput(e.currentTarget.value);
    }
    
    handleSubmit(e) {
        this.props.searchInput(e.currentTarget.value);
    }

    render() {
        
        return (
            <div className='searchbar-outer'>
                <form className='searchbar-container'
                onSubmit={this.handleSubmit}
                >
                    <input  className='searchbar' 
                            type="text" 
                            placeholder="Search" 
                            onChange={this.handleInput}/>
                </form>
            </div>
        )
    }
}

export default Searchbar;