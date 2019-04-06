import axios from 'axios'

export default {
    getAccountDetails: () => {
        return axios({
            url: `/accounts`,
            method: 'GET', 
        })
    },
}