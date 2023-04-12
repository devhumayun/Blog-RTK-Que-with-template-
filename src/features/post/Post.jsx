import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = () => {



  return (
    <div className='container py-5'>
      <div className="row py-5">
        <div className="col-md-10 ">
            <div className="card-body">
                <div className="blog-wraper">
                    <div className="blog-item">
                        <div className="blogger-img">
                            <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                        </div>
                        <div className="blogger-info">
                            <h3> Md Humayun Kabir </h3>
                            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quas, recusandae dicta corporis sed quam at animi saepe libero voluptatem. </span>
                            <Link to={"/2"}> Read more </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
