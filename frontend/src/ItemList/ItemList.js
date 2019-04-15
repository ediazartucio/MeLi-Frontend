import React from 'react';
import {withRouter} from 'react-router-dom';
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
        this.viewDetail = this.viewDetail.bind(this);
    }

    async componentDidMount() {
        let parsedQuery = queryParser.parse(this.props.location.search);
        let searchResult = await api.getSearchResults(parsedQuery);
        this.setState({ items: searchResult.items });
    };

    viewDetail(itemId) {
        this.props.history.push({
            pathname: `/items/${itemId}`,
            state: { itemId },
        });
    }

    renderItems() {
        return this.state.items.map(item => {
            return(
                <ItemRow item={item} onClick={this.viewDetail} />
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

export default withRouter(ItemList);