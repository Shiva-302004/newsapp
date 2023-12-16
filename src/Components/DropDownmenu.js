import React from 'react'
import { Link } from 'react-router-dom'

const DropDownmenu = () => {
    const facility=["more","sports","science","technology"]
  return (
    <div>
        <select name="drop" id="drop" onChange={(e)=>e.target.value}>
            {facility.map((el,id)=>{
                return <option id="drop"  ><button type="submit" >{el}</button></option>
            })}
        </select>
    </div>
  )
}

export default DropDownmenu