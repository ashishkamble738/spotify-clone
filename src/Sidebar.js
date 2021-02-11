import React from 'react'
import { useDataLayerValue } from './DataLayer'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
             src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo"/>

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {/* Optional Chaining */}
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

            {/* <SidebarOption title="Hip Hop" />
            <SidebarOption title="Pop" />
            <SidebarOption title="Punjabi" /> */}

        </div>
    )
}

export default Sidebar
