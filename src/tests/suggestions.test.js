import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../app/store';
import Suggestions from '../components/artistSuggestions';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(
        <Provider store={store}>
            <Router>
                <Suggestions></Suggestions>
            </Router>
        </Provider>
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
