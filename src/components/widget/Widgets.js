import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetsContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1512677536215433219"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="yuji_illab"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/yuji_illab"}
          options={{ text: "#Hello", via: "yuji_illab" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
