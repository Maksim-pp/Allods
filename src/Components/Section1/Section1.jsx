import React from 'react'
import style from './Section1.module.css'
import fon from '../../assets/img/background wall.png'
import dog from '../../assets/img/Vito 1.png'
import elipse from '../../assets/img/Ellipse 1.png'
import img1 from '../../assets/img/Часы copy 1.png'
import img2 from '../../assets/img/ТУЛБОКС 1.png'
import img3 from '../../assets/img/хрупкая 1.png'
import img4 from '../../assets/img/большой символ 1.png'
import img5 from '../../assets/img/мана 1.png'
import img6 from '../../assets/img/модуль 1.png'
import img7 from '../../assets/img/вито 1.png'
import box from '../../assets/img/box.png'
import glow from '../../assets/img/BLUE GLOW 1.png'


function Section1() {
  return (
    <div className={style.block}>
      <div className={style.fon}>
        <img src={fon} alt="" />
      </div>
      <div className={style.dog}>
        <img src={dog} alt="" />
      </div>
      <div className={style.elipse}>
        <img src={elipse} alt="" />
      </div>
      <div className={style.info}>

        <h1 className={style.h1}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h1>
        <div className={style.buttons}>
          <button>Бесплатные сервера</button>
          <button>Подписочный сервер</button>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img1} alt="" />
            </div>
            <p>Игровое время</p>
          </div>
          <div>-</div>
          <div>30 дней</div>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img2} alt="" />
            </div>
            <p>Запечатанный набор инструментов</p>
          </div>
          <div>1</div>
          <div>1</div>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img3} alt="" />
            </div>
            <p>Хрупкая чистая руна 10-й ступени</p>
          </div>
          <div>1</div>
          <div>-</div>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img4} alt="" />
            </div>
            <p>Большой символ изобилия творца</p>
          </div>
          <div>10</div>
          <div>-</div>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img5} alt="" />
            </div>
            <p>Мана-батарея</p>
          </div>
          <div>-</div>
          <div>20</div>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img6} alt="" />
            </div>
            <p>Модуль памяти</p>
          </div>
          <div>-</div>
          <div>10</div>
        </div>

        <div className={style.item}>
          <div className={style.div}>
            <div className={style.img}>
              <img src={img7} alt="" />
            </div>
            <p>Помощник Вито </p>
          </div>
          <div>1</div>
          <div>1</div>
        </div>

        <div className={style.box}>
          <div>
            <img src={box} alt="" />
          </div>
          <div className={style.price}>
            <h2>399 ₽</h2>
            <button>ПРИОБРЕСТИ</button>
          </div>
        </div>
      </div>
      <div className={style.glow}>
        <img src={glow} alt="" />
      </div>
    </div>
  )
}

export default Section1