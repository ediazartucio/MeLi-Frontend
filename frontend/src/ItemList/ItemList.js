import React from 'react';
import {withRouter} from 'react-router-dom';
import queryParser from 'query-string';
import api from '../common/Services/api.js';
import ItemRow from './ItemRow.js';
import Breadcrumb from '../common/Components/Breadcrumb.js';
import './ItemList.css';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categories: [],
        };
        this.renderItems = this.renderItems.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
    }

    async componentDidMount() {
        let parsedQuery = queryParser.parse(this.props.location.search);
        let searchResult = await api.getSearchResults(parsedQuery);
        this.setState({ 
            items: searchResult.items,
            categories: searchResult.categories,
        });
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
                <React.Fragment key={item.id}>
                    <ItemRow item={item} onClick={this.viewDetail} />
                </React.Fragment>
            );
        });
    }

    render() {
        return(
            <React.Fragment>
                <Breadcrumb elements={this.state.categories} />
                <div className='item-list-container'>
                    {this.renderItems()}
                </div>
            </React.Fragment>
        );
    };
}

export default withRouter(ItemList);