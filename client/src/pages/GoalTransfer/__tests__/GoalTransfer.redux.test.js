import { mockStore, getAction } from "../../../util/test-util"
import { goalTransferError, goalTransferSuccess } from "../GoalTransfer.redux";

describe("GoalTransfers", () => {
    it("dispatchs success actions on successful goal transfer call", async () => {
        const store = mockStore();
        store.dispatch(goalTransferSuccess());
        await goalTransferSuccess(store, 'GOAL_TRANSFER_SUCCESS')
        expect(await getAction(store, 'GOAL_TRANSFER_SUCCESS')).toEqual({ type: "GOAL_TRANSFER_SUCCESS" })
    })
    it("dispatchs success actions on successful goal transfer call", async () => {
        const store = mockStore();
        store.dispatch(goalTransferSuccess());
        await goalTransferSuccess(store, 'GOAL_TRANSFER_SUCCESS')
        expect(await getAction(store, 'GOAL_TRANSFER_SUCCESS')).toEqual({ type: "GOAL_TRANSFER_SUCCESS" })
    })
    it("dispatchs error actions on failed goals transfer call", async () => {
        const store = mockStore();
        store.dispatch(goalTransferError());
        await goalTransferError(store, 'GOAL_TRANSFER_ERROR')
        expect(await getAction(store, 'GOAL_TRANSFER_ERROR')).toEqual({ type: "GOAL_TRANSFER_ERROR" })
    })
})