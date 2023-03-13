import React from 'react';

import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () =>(
    <div className={`${styles.flexCenter} w-[140px] h-[140px] group rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary group-hover:bg-inherit w-full h-full rounded-full transition ease-out duration-500`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-3 text-blue-50 group-hover:text-black group-hover:font-semibold">
            Get
          </p>
          <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-blue-50 group-hover:text-black group-hover:font-semibold">
              Started
          </p>
      </div>
    </div>
  )

export default GetStarted