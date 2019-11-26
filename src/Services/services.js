import Twitter from "twitter";
import {
  TWITTER_API_KEY,
  TWITTER_API_SECRET,
  TWITTER_ACCESS_SECRET,
  TWITTER_ACCESS_TOKEN
} from "./constant";

const stockCode = ["DJI", "NIM", "SNP", "AAPL"];

const twitterClient = new Twitter({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_SECRET,
  access_token_key: TWITTER_ACCESS_SECRET,
  access_token_secret: TWITTER_ACCESS_TOKEN
});

export function loadTweets(user) {
  var params = { screen_name: "nodejs" };
  twitterClient.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      console.log(tweets);
    }
  });
}
