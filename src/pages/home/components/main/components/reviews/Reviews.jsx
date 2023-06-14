import React from 'react'
import "./style.css"

import image1 from "../../../../../../assets/images/watch.jpg"

export default function Reviews() {
  return (
    <div className='reviews'>
        <div className="reviews_title">
        <div className='reviews_title2container'>
            <h1 className="reviews_title2">Our Clients</h1>
        <div className="reviews_title-line"></div>
        </div>
        <h1 className="reviews_title1">Speak</h1>
        </div>
        <p>We have been working with clients around the world</p>


<div className="reviews_container">
        <div className="reviews__review-container">
            <div className="reviews__review-container__content">
                <h3>Mindblowing Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Auctor neque sed imperdiet nibh
                    lectus feugiat nunc sem.
                </p>
            </div>

            <div className="reviews__review-container__image-container">
                <img src={image1} />
                <p>Jane Cooper</p>
            </div>
        </div>

        <div className="reviews__review-container">
            <div className="reviews__review-container__content">
                <h3>Mindblowing Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Auctor neque sed imperdiet nibh
                    lectus feugiat nunc sem.
                </p>
            </div>

            <div className="reviews__review-container__image-container">
                <img src={image1} />
                <p>Jane Cooper</p>
            </div>
        </div>

        <div className="reviews__review-container">
            <div className="reviews__review-container__content">
                <h3>Mindblowing Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Auctor neque sed imperdiet nibh
                    lectus feugiat nunc sem.
                </p>
            </div>

            <div className="reviews__review-container__image-container">
                <img src={image1} />
                <p>Jane Cooper</p>
            </div>
        </div>
        </div>
    </div>
  )
}
