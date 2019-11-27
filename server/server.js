const http = require('http');
const Twitter = require('twitter')



const twitterClient = new Twitter({
    consumer_key: TWITTER_API_KEY,
    consumer_secret: TWITTER_API_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_SECRET
});


http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'application/json'}); // http header
 const {url} = req;
 if(url ==='/getTwitter'){
    const params = { screen_name: "nodejs" };
    twitterClient.get("statuses/user_timeline", params, function(
        error,
        tweets,
        response
    ) {
        if (!error) {
            // console.log(tweets);
            res.write(JSON.stringify(tweets))
            res.end()
        } else {
            res.write(JSON.stringify(error))
            res.end()
        }
    })
 }
}).listen(3001, () => {
 console.log("server start at port 3001"); //the server object listens on port 3000
});