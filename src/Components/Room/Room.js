import React,{useState} from 'react';
import './Room.css'

function Room(){
    const [isLit, setLit] = useState(true);
    let [RoomTemp, setTemp] = useState(72);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
                <button onClick={() => setLit(true)}>Light</button> - 
                <button onClick={() => setLit(false)}>Dark</button>
                <p>
                    Room Temperature: {RoomTemp} F
                </p>
                <span>Set the Temp: <button onClick={() => setTemp(++RoomTemp)}>+</button>  <button onClick={() => setTemp(--RoomTemp)}>-</button></span>
                {/* <span>Decrease the Temp: <button onClick={() => setTemp(--RoomTemp)}>-</button></span> */}
        </div>
    )
}
export default Room