import React from 'react'

function Container({name,data,color}) {
  return (
    <div style={{background:color}} className='item'>
        <h3>{name}</h3>
        <br/><br/><br/>
        <h3>{data}</h3>
    </div>
  )
}

export default Container