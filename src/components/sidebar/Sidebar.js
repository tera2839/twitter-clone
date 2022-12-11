import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";
import SignOut from '../SignIn/SignOut';


function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--twitterIcon" />

      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={SearchIcon}/>
      <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
      <SidebarOption text="リスト" Icon={ListAltIcon}/>
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon}/>

      <Button variant='outlined' className="sidebar--tweet" fullWidth>
        ツイートする
      </Button>
      <SignOut />
    </div>
  )
}

export default Sidebar