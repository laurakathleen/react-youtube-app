import React, { Component } from 'react';

//This is a class component which we use when we want it to have some kind of internal record keeping)
//It is an actual JS object with properties
//All class-based components must have a render function within it
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;