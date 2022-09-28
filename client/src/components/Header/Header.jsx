import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' 
            src='https://media.istockphoto.com/photos/beautiful-mountain-landscape-at-sunshine-picture-id509636186?k=20&m=509636186&s=612x612&w=0&h=HYGDBgLVQaXqGQnnuwb3FIz7dhRNlYCLZGVMEnA9bfs=' 
            alt='img'/>
    </div>
  )
}
