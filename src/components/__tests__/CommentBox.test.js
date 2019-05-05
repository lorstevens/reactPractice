import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox'
import Root from 'root'

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})



describe('Text Area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })

    it('has a text area users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    });

    it('has a text area that clears when button is clicked', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})