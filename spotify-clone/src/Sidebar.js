import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { useDataLayerValue } from './DataLayer'

function Sidebar() {
  const [{ playLists } ] = useDataLayerValue()

  return (
    <div className="Sidebar">
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify__logo" />
        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryBooksOutlinedIcon}/>
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />

        {playLists?.items?.map(playlist => (<SidebarOption title={playlist.name} />))}
        {/* <SidebarOption title={user} /> */}
      

    </div>
  )
}

export default Sidebar