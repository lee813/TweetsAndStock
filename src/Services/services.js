import request from '../request'
const stockCode = ["DJI", "NIM", "SNP", "AAPL"];


export function loadTweets(user) {
    return request('http://localhost:3001/getTwitter?name=realDonaldTrump')
}
