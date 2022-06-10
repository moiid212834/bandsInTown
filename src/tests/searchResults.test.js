import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../app/store';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import SearchResults from '../components/searchResults';

it('renders correctly', () => {
    const tree = renderer
        .create(
        <Provider store={store}>
            <Router>
                <SearchResults></SearchResults>
            </Router>
        </Provider>
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});