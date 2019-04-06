import axios from 'axios'

export default {
    getTransactions: params => {
        const url = `/transactions?from=${params.from}&to=${params.to}`
        return axios({
            url: url,
            method: 'GET', 
        })
    }
}