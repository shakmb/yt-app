import axios from 'axios';

const KEY = 'AIzaSyA_UMEtZCxIf0V4-qj5G65odD95bvQMU-Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})