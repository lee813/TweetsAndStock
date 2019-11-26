const express = require('express')
const Twitter = require('twitter')
const app = express()
const port = 3001


const twitterClient = new Twitter({
    consumer_key: TWITTER_API_KEY,
    consumer_secret: TWITTER_API_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_SECRET
});


app.get('/getTwitter', (req, res) => {

    var params = { screen_name: "nodejs" };
    console.log('-------');
    twitterClient.get("statuses/user_timeline", params, function(
        error,
        tweets,
        response
    ) {
        if (!error) {
            console.log(tweets);
            res.send(tweets)
        } else {
            console.log(error)
        }
    })

    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))