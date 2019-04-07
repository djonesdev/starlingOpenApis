import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CreateGoalView } from '../CreateGoal';

Enzyme.configure({ adapter: new Adapter() })

describe('Transaction component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<CreateGoalView />)
        expect(wrapper.find('.page-container').exists()).toBe(true)
        expect(wrapper.find('.center-aligned').exists()).toBe(false)
        expect(wrapper.find('.table-container').exists()).toBe(false)
        expect(wrapper.find('.spider-man').exists()).toBe(false)
    })
    it('should click the button', () => {
        const mockClick = jest.fn()
        const wrapper = shallow(<CreateGoalView createGoal={mockClick} />)
        wrapper.find('#create-goal').simulate('click')
        expect(mockClick).toHaveBeenCalledTimes(1)
    })
})