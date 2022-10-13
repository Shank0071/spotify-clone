import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow'

export default function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue()


  return (
    <div className="Body">
        <Header spotify={ spotify }/>
        <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{ discover_weekly?.description }</p>
          </div>
        </div>

        <div className="body__songs">
          <div className="mui__icons">
            <PlayCircleOutline className="body__shuffle" />
            <FavoriteIcon  fontSize="large" />
            <MoreHorizIcon />
          </div>
          <div>
            {/* List of songs */}
            {discover_weekly?.tracks.items.map(item => (
              <SongRow track={item.track} />
            ))}
          </div>
        </div>
    </div>
  )
}
