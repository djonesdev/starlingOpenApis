import axios from 'axios'

export default {
    getTransactions: params => {
        const url = `/transactions`
        return axios({
            url: url,
            method: 'GET', 
        })
    }
}