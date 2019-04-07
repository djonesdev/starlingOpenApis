import { accountsReducer, goalsReducer, transactionsReducer } from "../"

describe('reducers', () => { 
    it('returns initial state', () => {
        expect(goalsReducer(undefined, {})).toEqual({dirtyTransactions: [], goals: [], loading: false, transferAmount: 0, transferTargetGoalName: ""});
        expect(accountsReducer(undefined, {})).toEqual({ account: [] });
        expect(transactionsReducer(undefined, {})).toEqual({ transactions: [] });
    })
    it('set a transferAmount', () => {
        const initialState = { dirtyTransactions: undefined, transferAmount: undefined }
        const action = { type: 'SET_TRANSFER_AMOUNT', payload: 0 }
        const afterState = goalsReducer(initialState, action);
        expect(afterState).toEqual(initialState);
    })
})
