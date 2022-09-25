import React from 'react'
import './SongRow.css'

export default function SongRow({ track = "test"}) {
  return (
    <div className='SongRow'>
        <img src={track.album.images[0].url} alt="" />
        <div className="songRow__info">
            <h1>{track.name}</h1>
            <p>
                {track.artists.map(artist => artist.name).join(", ")}
                <span>{track.album.name}</span>
            </p>
        </div>
    </div>
  )
}
