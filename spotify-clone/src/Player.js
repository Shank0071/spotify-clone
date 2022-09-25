import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import "./Player.css"
import Footer from './Footer'

export default function Player({ spotify }) {
  return (
    <div className="Player">
      <div className="player__body">
          <Sidebar />
          <Body spotify={ spotify }/>
      </div>
      <Footer />
  
    </div>
  )
}
