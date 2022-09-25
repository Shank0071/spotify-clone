import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import { Slider } from '@mui/material';


export default function Footer() {
  return (
    <div className="Footer">
        <div className="footer__left">
          <p>Album and Song Details</p>
        </div>
        <div className="footer__center">
          <ShuffleOnIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
          <SkipNextIcon className="footer__icon" />
          <ReplayIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <VolumeDownRoundedIcon />
          <Slider className="slider"/>
        </div>
    </div>
  )
}
