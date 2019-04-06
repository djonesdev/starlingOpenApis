import { getGoals, getGoalsSuccess, getGoalsError, createGoalSuccess, createGoalError } from "../CreateGoal.redux"
import { mockStore, getAction } from "../../../util/test-util"

describe("CreateGoals", () => {
    it("dispatchs success actions on successful getGoals call", async () => {
      const store = mockStore();
      store.dispatch(getGoalsSuccess());
      await getGoals(store, 'GET_GOAL_SUCCESS')
      expect(await getAction(store, 'GET_GOAL_SUCCESS')).toEqual({ type: "GET_GOAL_SUCCESS" })
    })
    it("dispatchs error actions on failed getGoals call", async () => {
        const store = mockStore();
        store.dispatch(getGoalsError());
        await getGoals(store, 'GET_GOAL_ERROR')
        expect(await getAction(store, 'GET_GOAL_ERROR')).toEqual({ type: "GET_GOAL_ERROR" })
    })
    it("dispatchs success actions on successful createGoals call", async () => {
        const store = mockStore();
        store.dispatch(createGoalSuccess());
        await createGoalSuccess(store, 'CREATE_GOAL_SUCCESS')
        expect(await getAction(store, 'CREATE_GOAL_SUCCESS')).toEqual({ type: "CREATE_GOAL_SUCCESS" })
    })
    it("dispatchs error actions on failed createGoals call", async () => {
        const store = mockStore();
        store.dispatch(createGoalError());
        await createGoalError(store, 'CREATE_GOAL_ERROR')
        expect(await getAction(store, 'CREATE_GOAL_ERROR')).toEqual({ type: "CREATE_GOAL_ERROR" })
    })
})