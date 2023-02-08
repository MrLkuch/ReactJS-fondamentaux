import React from 'react'
import  './Card.css'


function Card(props){
    const{title,pic,desc}=props
    return(
        <div className='card'>
            <h1 className='card__title'>{title}</h1>
            <img src={pic} className='card__pic' />
            <p className='card__desc'>{desc}</p>
        </div>
    )
}

export default Card
