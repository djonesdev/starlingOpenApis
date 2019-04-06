import { mockStore, getAction } from "../../../util/test-util"
import { getTranasctionsSuccess, getTranasctionsError } from "../Transactions.redux"

describe("Transactions", () => {
    const store = mockStore()
    it("dispatchs success actions on successful transaction call", async () => {
        store.dispatch(getTranasctionsSuccess())
        await getTranasctionsSuccess(store, 'GET_TRANSACTIONS_SUCCESS')
        expect(await getAction(store, 'GET_TRANSACTIONS_SUCCESS')).toEqual({ type: "GET_TRANSACTIONS_SUCCESS" })
    })
    it("dispatchs error actions on failed goals transaction call", async () => {
        store.dispatch(getTranasctionsError())
        await getTranasctionsError(store, 'GET_TRANSACTIONS_ERROR')
        expect(await getAction(store, 'GET_TRANSACTIONS_ERROR')).toEqual({ type: "GET_TRANSACTIONS_ERROR" })
    })
})