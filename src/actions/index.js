import axios from 'axios'

export const loginFunction = async (e) => {
    try {
        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const response = await axios.post('http://127.0.0.1:3000/user/login', userData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
        login(data)
    } catch (err) {
        console.warn(err);
    }

}

export const registerFunction = async (e) => {
    try {
        const userData = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const response = await axios.post('http://127.0.0.1:3000/user/register', userData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err);
    }

}

export const getLeaderboardData = async () => {
    try{
        const response = await axios.get('http://127.0.0.1:3000/user')
        const data = response.data;
        const sort= data.sort((a, b) => {
            return b.score - a.score;
        })
        return sort;

    }catch(err){
        console.warn(err)
    }
}

function login(data) {
    localStorage.setItem("token", data.token)
}

