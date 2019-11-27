const http = require("http");
const Twitter = require("twitter");


const twitterClient = new Twitter({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_SECRET
});

const getParams = function(req) {
  let q = req.url.split("?"),
    result = {};
  if (q.length >= 2) {
    q[1].split("&").forEach(item => {
      try {
        result[item.split("=")[0]] = item.split("=")[1];
      } catch (e) {
        result[item.split("=")[0]] = "";
      }
    });
  }
  return result;
};

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" }); // http header
    const { url } = req;
    if (url.includes("/getTwitter")) {
      const param = getParams(req);
      if (!param.name) {
        res.write({ error: "No name in request!" });
        res.end();
      }
      const params = { screen_name: param.name };
      twitterClient.get("statuses/user_timeline", params, function(
        error,
        tweets,
        response
      ) {
        if (!error) {
          res.write(JSON.stringify(tweets));
          res.end();
        } else {
          res.write(JSON.stringify(error));
          res.end();
        }
      });
    }
  })
  .listen(3001, () => {
    console.log("server start at port 3001"); //the server object listens on port 3000
  });
