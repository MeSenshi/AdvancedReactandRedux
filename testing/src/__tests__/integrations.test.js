import React from 'react';
import {mount} from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';


let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <App/>
        </Root>
    );
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {name: 'fetch #1'},
            {name: 'fetch #2'}
        ]
    })
});

afterEach(function () {
    moxios.uninstall()
});

it('can fetch list of comments and display them', function (done) {
    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount()
    })
});