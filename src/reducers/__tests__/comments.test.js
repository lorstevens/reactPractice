import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from '../../actions/types';


it('handles actions', ()=> {

    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([], action)

    expect(newState).toEqual(['New Comment'])
})

it('handles actions with unknown type', ()=> {
    const newState = commentsReducer([], {type: 'eheh'})

    expect(newState).toEqual([])
})