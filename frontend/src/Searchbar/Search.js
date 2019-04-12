import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../common/assets/Logo_ML@2x.png.png.png';
import searchIcon from '../common/assets/ic_Search@2x.png.png.png';
import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.search= this.search.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({searchValue: value});
    }

    search() {
        if(this.state.searchValue.trim) {
            this.props.history.push(`/items?search=${this.state.searchValue}`);
        }
    }

    render() {
        return(
            <div className="searchbar-container">
                <img className="searchbar-logo" src={logo} alt="logo-meli" />
                <input type="text" className="searchbar-input" placeholder="Nunca dejes de buscar" value={this.state.searchValue} onChange={this.handleChange} />
                <button className="search-button" onClick={this.search}>
                    <img className="button-search-icon" src={searchIcon} alt="search-icon"/>
                </button>
            </div>
    )};
}

export default withRouter(Search);