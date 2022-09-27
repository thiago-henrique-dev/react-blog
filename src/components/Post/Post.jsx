import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImage'
             src="https://th.bing.com/th/id/OIP.E0J17-Lt3pwbL1SjtB1-mwHaE7?pid=ImgDet&rs=1" alt="" 
             />
             <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
             </div>
             <p className='postDesc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          tellus id condimentum lobortis. Cras nec convallis massa. Sed eleifend
          sodales nisl ac bibendum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          tellus id condimentum lobortis. Cras nec convallis massa. Sed eleifend
          sodales nisl ac bibendum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          tellus id condimentum lobortis. Cras nec convallis massa. Sed eleifend
          sodales nisl ac bibendum</p>
          
        </div>
        
  )
}
