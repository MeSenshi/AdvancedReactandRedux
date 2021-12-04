import {saveComment} from "../index";
import {SAVE_COMMENT,FETCH_COMMENTS} from "../types";

describe('fetchComment', ()=>{
    it('has the correct type', function () {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT)
    });

    it('has the correct payload ', function () {
        const action = saveComment('new comment');
        expect(action.payload).toEqual('new comment')

    });
});