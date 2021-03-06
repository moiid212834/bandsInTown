import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
