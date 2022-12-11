import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import Widgets from './components/widget/Widgets';

function TwitterMain() {
  return (
    <div className='app'>
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  )
}

export default TwitterMain