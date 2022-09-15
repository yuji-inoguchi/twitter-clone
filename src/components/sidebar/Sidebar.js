import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Icon } from "@mui/material";
import "./Sidebar.css";
import IconImg from "../../img/hand-icon.png";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <Box className="sidebar--twitterIcon">
        <img src={IconImg} />
      </Box>

      {/* サイドバーオプション */}
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={MailOutlineIcon} />
      <SidebarOption text="メッセージ" Icon={NotificationsNoneIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />
      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar--tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
