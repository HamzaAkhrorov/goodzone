import './header.css'
import React from 'react'
import Headerserch2 from '../components/headersearch2'

function header() {
  return (
    <>
    <div className="header-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzELuCA6FmGx5GUqI6tu0XYPNeYlwThv79PgIYLfHo9yh6vidX4jX_E_IrH1lg9VdW1rA&usqp=CAU" alt="" className='header-img'/>

        <p className='header-magazin'>Магазины</p>
        <span style={{visibility: "hidden"}}>.hyuinjohvjb nkljhiogjubkv,m nlj;oihubkj ,mknj;jkujiuji</span>
    </div>
    
    <Headerserch2 />
    </>
  )
}

export default header