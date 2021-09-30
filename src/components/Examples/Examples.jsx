import React, { useState, useEffect } from "react"



import './Examples.css';


const Examples = (props) => {

    const img = props.examplesPage.img

    const [activeIndex, setActiveIndex] = useState(0);



    useEffect(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        return () => clearInterval()
    }, activeIndex)

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1


    const nextSlide = () => {
        setActiveIndex((current) => {
            const res = current === img.length - 1 ? 0 : current + 1
            return res
        })
    };

    const previousSlide = () => {
        setActiveIndex((current) => {
            const res = current === 0 ? img.length - 1 : current - 1
            return res
        })
    };


    return (
        <div className='examples'>
            <h1>НАШИ РАБОТЫ</h1>
            <div className="slider">
                <div className="slider-img slider-img-prev"
                    key={prevImgIndex}>
                    {img[prevImgIndex]}
                </div>
                <div className="slider-img"
                    key={activeIndex}>
                    {img[activeIndex]}
                </div>
                <div className="slider-img slider-img-next"
                    key={nextImgIndex}>
                    {img[nextImgIndex]}
                </div>
                <a class="previous" onClick={() => previousSlide()}>&#10094;</a>
                <a class="next" onClick={() => nextSlide()}>&#10095;</a>
            </div>
        </div>
    );
}

export default Examples;