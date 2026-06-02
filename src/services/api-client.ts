import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params:{
        key: "28554b1b573e4885a505e88a9c93ea2d"
    }
})