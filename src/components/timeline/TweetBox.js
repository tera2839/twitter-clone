import { Avatar, Button } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import db from '../../firebase';
import "./TweetBox.css";

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db,"posts"), {
      displayName: "souma sakai",
      userName: "tera2839",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--Input'>
          <Avatar />
          <input placeholder='今どうしてる?'
          type="text"
          onChange={(e) => setTweetMessage(e.target.value) } />
        </div>
          <input 
          className='tweetBox--imageInput'
          placeholder='画像のURLを入力してください'
          type="text"
           onChange={(e) => setTweetImage(e.target.value) } />
          <Button className="tweetBox--tweetButton" type='submit'
           onClick={sendTweet} >
            ツイートする
          </Button>
      </form>
    </div>
  )
}

export default TweetBox