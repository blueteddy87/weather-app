import React from "react";
import "./descriptions.css";
import {FaArrowDown, FaArrowUp, FaWind} from 'react-icons/fa';
import {BiHappy} from "react-icons/bi";
import {MdCompress, MdOutlineDrop, MdOutlineWaterDrop} from "react-icons/md";
import {WiRain} from "react-icons/wi";
import { icons } from "react-icons";


const Descriptions = ({weather, units}) => {

    const tempUnit = units === 'metric' ? '˚C' : '˚F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id: 2,
            icon: <FaArrowUp />,
            title: " max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: " odczuwalna",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: " ciśnienie",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: " wilgotność",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: " prędkość wiatru",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },

    ]

    return (
    <div className="section section_descriptions">
        {cards.map(({id, icon, title, data, unit}) => (

        
      <div className="card">
          <div className="descrpition__card-icon">
              {icon}
              <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
      </div>
    ))}
      </div>
    
    );
  }

export default Descriptions