import React, { useEffect, useState } from 'react'
import {AiOutlineMinus} from "react-icons/ai"
import {CgMathPlus} from "react-icons/cg"
import "./passengers.css"

const Passengers = ({passengers,setPassengers,adulto,setAdulto,ninos,setNinos,bebe,setBebe}) => {

    const increaseAdulto=(e)=>{
        e.preventDefault();
        setAdulto(adulto=>adulto+1)
    }
    const decreaseAdulto=(e)=>{
        e.preventDefault();
        if(adulto >= 1){
        setAdulto(adulto=>adulto-1)
        }
        return adulto
    }
    const increaseNinos=(e)=>{
        e.preventDefault();
        setNinos(ninos=>ninos+1)
    }
    const decreaseNinos=(e)=>{
        e.preventDefault();
        if(ninos >= 1){
        setNinos(ninos=>ninos-1)
        }
        return ninos
    }
    const increaseBebe=(e)=>{
        e.preventDefault();
        setBebe(bebe=>bebe+1)
    }
    const decreaseBebe=(e)=>{
        e.preventDefault();
        if(bebe >= 1){
        setBebe(bebe=>bebe-1)
        }
        return bebe
    }
    useEffect(() => {
      setPassengers(adulto + bebe + ninos)
    }, [adulto,bebe,ninos])
    
  return (
    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div className='passengers_box'>
                        
                        <div className="passenger-count-selection">
                            <div className="row">
                                <h2 className="item_count">{adulto}</h2>
                                <div>
                                    <h2 className="passenger_count_label"> Adulto </h2>
                                    <p className="passenger_count_sublabel"> Mayores de 12 años </p>
                                </div>
                            </div>
                            <div className="add_subtract_btn row ml-1">
                                <button className="add_btn mr-2" onClick={increaseAdulto}>
                                    <CgMathPlus className="add_btn_svg"/>
                                </button>
                                <button className="subtract_btn mr-2">
                                    <AiOutlineMinus className="subtract_btn_svg" onClick={decreaseAdulto}/>
                                </button>

                            </div>
                        </div>
                        <div className="passenger-count-selection" onClick={(e)=>e.stopPropagation()}>
                            <div className="row">
                                <h2 className="item_count">{ninos}</h2>
                                <div>
                                    <h2 className="passenger_count_label"> Niños </h2>
                                    <p className="passenger_count_sublabel"> 2-11 Años </p>
                                </div>
                            </div>
                            <div className="add_subtract_btn row ml-1">
                                <button className="add_btn mr-2">
                                    <CgMathPlus className="add_btn_svg" onClick={increaseNinos}/>
                                </button>
                                <button className="subtract_btn mr-2">
                                    <AiOutlineMinus className="subtract_btn_svg"onClick={decreaseNinos}/>
                                </button>

                            </div>
                        </div>
                        <div className="passenger-count-selection">
                            <div className="row">
                                <h2 className="item_count">{bebe}</h2>
                                <div>
                                    <h2 className="passenger_count_label"> Bebé </h2>
                                    <p className="passenger_count_sublabel"> Menos De 2 Años </p>
                                </div>
                            </div>
                            <div className="add_subtract_btn row ml-1">
                                <button className="add_btn mr-2" onClick={increaseBebe}>
                                    <CgMathPlus className="add_btn_svg"/>
                                </button>
                                <button className="subtract_btn mr-2"onClick={decreaseBebe}>
                                    <AiOutlineMinus className="subtract_btn_svg"/>
                                </button>

                            </div>
                        </div>
                      </div>
                    </div>
  )
}

export default Passengers