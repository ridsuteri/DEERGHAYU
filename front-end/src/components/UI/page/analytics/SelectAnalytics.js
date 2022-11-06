import React from 'react'
import './style/SelectAnalytics.css'

function SelectAnalytics() {
    const [selected, setSelected] = React.useState('5')
  return (
    <div className='select-analytics-container'>
        <select 
            className='select-analytics'
            value={selected}
        >
            <option value='1' onClick={()=>{setSelected(1)}} >Calories</option>
            <option value='2' onClick={()=>{setSelected(2)}}>Cardiac</option>
            <option value='3' onClick={()=>{setSelected(3)}}>Sleep</option>
            <option value='4' onClick={()=>{setSelected(4)}}>Blood Pressure</option>
            <option value='5' onClick={()=>{setSelected(5)}}>Cholesterol</option>
            <option value='6' onClick={()=>{setSelected(6)}}>Blood Sugar</option>
        </select>
    </div>
  )
}

export default SelectAnalytics