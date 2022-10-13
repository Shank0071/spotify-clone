import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

export default function Header() {
    const [{ user }] = useDataLayerValue()

  return (
    <div className="Header">
        <div className="header__left">
            <SearchIcon />
            <input type="text" placeholder='Search for artists, songs, others...'/>
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt="sankar" />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}
