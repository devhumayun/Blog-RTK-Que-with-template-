import React from 'react'
import { Link } from 'react-router-dom'

const SinglePost = () => {
  return (
    <div className='container my-5'>
      <div className="row py-5 justify-content-center">
        <div className="clo-md-8 ustify-content-center">
            <div className="single-wraper">
                <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                <h3> MD Humayun Kabir </h3>
                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis facilis, voluptatum rerum, nulla nemo omnis repellendus sint fugit saepe voluptatibus minus atque maiores. Mollitia ducimus voluptas cumque animi aliquid. </span>
                <Link to={"/"}> Back To Blog </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
