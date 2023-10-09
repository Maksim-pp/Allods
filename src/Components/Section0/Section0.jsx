import React from 'react'
import style from './Section0.module.css'
import Fon from '../../assets/img/Hue_Saturation 5 1.png'
import logo from '../../assets/img/logo.png'
import boxes from '../../assets/img/boxes.png'
import pers1 from '../../assets/img/MafiaCostume_2022 2.png'
import pers2 from '../../assets/img/MafiaCostume_2022 3.png'
import glow from '../../assets/img/glow 1.png'
import blueGlow from '../../assets/img/BLUE GLOW 3.png'
import layer1 from '../../assets/img/Layer 157 1.png'
import layer2 from '../../assets/img/Layer 157 2.png'
import layer3 from '../../assets/img/Layer 157 3.png'

function Section0() {
  return (
    <div className={style.block}>
      <div className={style.fon}>
        <img src={Fon} alt="" />
      </div>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.boxes}>
        <img src={boxes} alt="" />
      </div>
      <div className={style.pers1}>
        <img src={pers1} alt="" />
      </div>
      <div className={style.pers2}>
        <img src={pers2} alt="" />
      </div>
      <h1 className={style.h1}>
        КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ
      </h1>
      <p className={style.p}>
        Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
      </p>
      <div className={style.glow}>
        <img src={glow} alt="" />
      </div>
      <div className={style.blueGlow}>
        <img src={blueGlow} alt="" />
      </div>
      <div className={style.layer1}>
        <img src={layer1} alt="" />
      </div>
      <div className={style.layer2}>
        <img src={layer2} alt="" />
      </div>
      <div className={style.layer3}>
        <img src={layer3} alt="" />
      </div>
    </div>
  )
}

export default Section0