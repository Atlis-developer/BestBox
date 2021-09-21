import React, {useState, useEffect} from "react"
import slide1 from '../../images/Motobox01.jpg'
import slide2 from '../../images/Motobox02.jpg'
import slide3 from '../../images/Motobox03.jpg'
import slide4 from '../../images/Motobox04.jpg'
import slide5 from '../../images/Motobox03.jpg'
import './Examples.css';


const Examples = () => {
  const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />,
    <img key={slide5} src={slide5} />,
]

const [activeIndex, setActiveIndex] = useState(0);


// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 5000)
    // Выключаем интервал
    return () => clearInterval()
}, activeIndex)
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1


const nextSlide = () =>{
  setActiveIndex((current) => {
    const res = current === img.length - 1 ? 0 : current + 1
    return res
})
};

const previousSlide = () =>{
  setActiveIndex((current) => {
    const res = current === 0 ? img.length -1 : current - 1
    return res
})
};


return ( 
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
        <a class="previous" onClick={()=>previousSlide()}>&#10094;</a>
        <a class="next" onClick={()=>nextSlide()}>&#10095;</a>
    </div>
  );
}

export default Examples;