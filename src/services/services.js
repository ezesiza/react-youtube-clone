import axios from 'axios';

const KEY='AIzaSyChUNNAhY5K0K2JmR_GqH6ggHsueimPLEg';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
       key:KEY,
    },
 })

export default request;

