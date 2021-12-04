import React from 'react';
import CommentBox from "../CommentBox";
import {mount} from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});


afterEach(() => {
    wrapped.unmount();
});

it('has a text area and button', function () {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate('change', {target: {value: 'WHATSUP DOC'}})
        wrapped.update();
    });

    it('has textarea that users can type in', function () {
        expect(wrapped.find('textarea').prop('value')).toEqual('WHATSUP DOC')
    });

    it('has textarea empty after submit', function () {

        wrapped.find("form").simulate('submit');
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    });
});

