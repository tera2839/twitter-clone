import React, { useEffect, useState } from 'react'
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from '../../firebase';
import { collection, getDocs, onSnapshot, orderBy, query, Timestamp} from "firebase/firestore"; 
import FlipMove from 'react-flip-move';

function Timeline() {

  const [posts, setPosts] = useState([]);

  const postData = collection(db, "posts");
  getDocs(postData).then((QuerySnapshot) => {
    setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
  });

  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("Timestamp", "desc"))
    // getDocs(q).then((QuerySnapshot) => {
    //   setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
    // });
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  },[])

  return (
    <div className='timeline'>
      <div className='timeline--header'>
        <h2>ホーム</h2>
      </div>

      <TweetBox />

      <FlipMove>
      {posts.map((post) => (
         <Post 
         key={post.userName}
         displayName={post.displayName} 
         userName={post.userName}
         verified={post.verified} 
         text={post.text} 
         avatar={post.avatar}
         image={post.image}
         />
      ))}
      </FlipMove>
    </div>
  )
}

export default Timeline