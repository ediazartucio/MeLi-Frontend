import React from 'react';
import ItemRow from './ItemRow.js';
import './ItemList.css';
import api from '../common/Services/api.js';
import queryParser from 'query-string';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.renderItems = this.renderItems.bind(this);
    }

    async componentDidMount() {
        let parsedQuery = queryParser.parse(this.props.location.search);
        let searchResult = await api.getSearchResults(parsedQuery);
        this.setState({ items: searchResult.items });
    };

    renderItems() {
        return this.state.items.map(item => {
            return(
                <ItemRow item={item} />
            );
        });
    }

    render() {
        return(
            <div className='item-list-container'>
                {this.renderItems()}
            </div>
        );
    };
}

export default ItemList;