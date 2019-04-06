import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Transactions } from '../Transactions'

Enzyme.configure({ adapter: new Adapter() })

describe('Transaction component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Transactions />)
        expect(wrapper.find('.date-picker').exists()).toBe(true)
        expect(wrapper.find('.center-aligned').exists()).toBe(true)
        expect(wrapper.find('.page-container').exists()).toBe(true)
        expect(wrapper.find('.table-container').exists()).toBe(false)
        expect(wrapper.find('.spider-man').exists()).toBe(false)
    })
    it('should render transaction table when there are tranactions', () => {
        const wrapper = shallow(<Transactions hasTransactions={true} />)
        expect(wrapper.find('.date-picker').exists()).toBe(true)
        expect(wrapper.find('.center-aligned').exists()).toBe(true)
        expect(wrapper.find('.page-container').exists()).toBe(true)
        expect(wrapper.find('.table-container').exists()).toBe(true)
        expect(wrapper.find('.captain-america').exists()).toBe(false)
    })
})