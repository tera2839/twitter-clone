import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon' />
        <input placeholder='キーワード検索' type="text"/>
      </div>
      <div className='widgets--widgetContainer'>
        <h2>今どうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1580378191671087105"} />

        <TwitterTimelineEmbed sourceType='profile' screenName='tera2839' options={{height: 400}} />
        <TwitterShareButton url={"https://twitter.com/tera2839"} 
        options={{text: "#react.js勉強中", via: "tera2839"}} />
      </div>
    </div>
  )
}

export default Widgets