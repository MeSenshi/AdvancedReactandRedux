import React from 'react';
import App from '../App';
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
import {shallow} from 'enzyme';

let wrapped;

beforeEach(()=>{
    wrapped =  shallow(<App/>)
});

test('shows a comment box', async function () {
    expect(wrapped.find(CommentBox).length).toEqual(1)
});


test('shows a comment list', async function () {
    expect(wrapped.find(CommentList).length).toEqual(1)
});