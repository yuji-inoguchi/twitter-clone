import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";
import tweetIcon from "../../img/hand.png";

function TweetBox() {
  const [tweetUser, setTweetUser] = useState("");
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: tweetUser,
      username: "良い1日をお過ごしください",
      verified: true,
      text: tweetMessage,
      // avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      avatar: tweetIcon,
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetUser("");
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <div className="tweetBox--inputName">
            {/* <Avatar /> */}
            <input
              value={tweetUser}
              placeholder="おなまえ"
              type="text"
              onChange={(e) => setTweetUser(e.target.value)}
            ></input>
          </div>
          <div className="tweetBox--inputText">
            <input
              value={tweetMessage}
              placeholder="いまのひとこと"
              type="text"
              onChange={(e) => setTweetMessage(e.target.value)}
            ></input>
          </div>
        </div>
        {/* <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="画像も投稿いただけます。URLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input> */}
        <Button
          className="tweetBox--tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
