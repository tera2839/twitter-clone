import React from 'react';
import "./SidebarOption.css"

function SidebarOption({text, Icon, active}) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
     <Icon sx={{
      "@media screen and (max-width:1300px)": {
        paddingBottom: 3,
        fontSize: 35,
        marginLeft: 6,
      }, "@media screen and (max-width:440px)": {
        marginLeft: 0,
        
      },
     }} />
     <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption