import { accountsReducer, goalsReducer, transactionsReducer } from "../"

describe('reducers', () => { 
    it('returns initial state', () => {
        expect(goalsReducer(undefined, {})).toEqual({ goals: [], transferAmount: 0 });
        expect(accountsReducer(undefined, {})).toEqual({ account: [] });
        expect(transactionsReducer(undefined, {})).toEqual({ transactions: [] });
    })
    it('set a transferAmount', () => {
        const initialState = {transferAmount: 0};
        const action = { type: 'SET_TRANSFER_AMOUNT', payload: 0 }
        const afterState = goalsReducer(initialState, action);
        expect(afterState).toEqual({ transferAmount: 0 });
    })
})
