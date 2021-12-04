import commentsReducer from '../commentsReducer';
import {SAVE_COMMENT,FETCH_COMMENTS} from "../../actions/types";

it('handles actions of type SAVE_COMMENT', function () {
    const action = {
        type:SAVE_COMMENT,
        payload: 'new comment'
    };

    const newState = commentsReducer([],action);

    expect(newState).toEqual(['new comment'])
});


it('handles actions with unknown type ', function () {
    const newState = commentsReducer([],{type:'ssdfsdfs'});
    expect(newState).toEqual([])
}); 
