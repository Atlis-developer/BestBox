import React, { useRef } from 'react';
import './HomePage.css';
import Tire from '../../images/tire.jpg'
import Box from '../../images/box.jpg'
import Skis from '../../images/skis.jpg'
import Tools from '../../images/tools.jpg'
import { NavLink } from 'react-router-dom';
import "animate.css"
import { WOW } from "wowjs";


export const HomePage = () => {

    const wow = new WOW();
    wow.init();

    return (
        <div className='home-page'>
            <div className='center'>
                <div className='grand-center'>
                    <div className='grand-text animate__animated animate__fadeInLeft' >
                        <h1>Металлические шкафы для <br /> парковки</h1>
                        <span>Оптимизируй пространство своей парковки</span>
                    </div>
                    <div className='buttons animate__animated animate__fadeInRight'>
                        <NavLink to='/catalog'>
                            <button className='btn'>Каталог шкафов</button>
                        </NavLink>
                        <NavLink to='/motoboxs'>
                            <button className='btn'>Мотобоксы</button>
                        </NavLink>

                    </div>
                </div>
            </div>
            <div className='information'>
                <div className='txt'>
                    <span>
                        <p>
                            В современном мире, подземные паркинги являются лучшим решением хранения Вашего «железного коня», в условиях тотальной нехватки парковочных мест. Но используете ли Вы, Ваше паркоместо на все 100%? Ведь Ваш автомобиль занимает всего 70% площади, а ещё 30% остаются не использованными.
                        </p>
                        <p>
                            Мы же предлагаем Вам, использовать эти 30 % более рационально, например для безопасного хранения Вашего имущества, такого как:
                        </p>
                    </span>
                </div>
                <div class="line-separator">
                    <div class="side-line"> </div>
                    <div class="triangle"> </div>
                    <div class="side-line"> </div>
                </div>
                <div className='txt-img wow animate__animated animate__fadeInUp'
                    data-wow-duration='2s'>
                    <div className='stuff'>
                        <img src={Tire} />
                        <div>
                            КОМПЛЕКТ СЕЗОННОЙ РЕЗИНЫ;
                        </div>
                    </div>
                    <div className='stuff'>
                        <img src={Skis} />
                        <div>
                            СПОРТИВНОЕ СНАРЯЖЕНИЕ;
                        </div>
                    </div>
                    <div className='stuff'>
                        <img src={Tools} />
                        <div>
                            ИНСТРУМЕНТЫ, ЗАПЧАСТИ;
                        </div>
                    </div>
                    <div className='stuff'>
                        <img src={Box} />
                        <div>
                            КОРОБКИ И ЯЩИКИ И Т.Д.
                        </div>
                    </div>
                </div>
                <div className='txt'>
                    <span>
                        <p>
                            В этом Вам помогут наши металлические шкафы с защитными роллетными ставнями, в разных комплектациях и размерах. Наша продукция изготовлена с высококачественных материалов, настоящими профессионалами своего дела.
                        </p>
                    </span>
                </div>
                <div className='work'>
                    <div className='work-txt'>
                        Принцип нашей работы:
                    </div>
                    <div class="line-separator">
                        <div class="side-line"> </div>
                        <div class="triangle"> </div>
                        <div class="side-line"> </div>
                    </div>
                    <div className='work-points'>
                        <div className='ball-txt wow animate__animated animate__fadeInRight'>
                            <div className='ball'>1</div>
                            <span>Обмеры:</span>
                            <div className='text'>
                                ЗАМЕР ПАРКОВОЧНОГО МЕСТА НА ОБЪЕКТЕ, ОБСУЖДЕНИЕ КОМПЛЕКТАЦИИ И ДЕТАЛЕЙ
                            </div>
                        </div>
                        <div className='ball-txt wow animate__animated animate__fadeInRight' data-wow-delay='0.5s'>
                            <div className='ball'>2</div>
                            <span>Проект:</span>
                            <div className='text'>
                                РАЗРАБОТКА ПРОЕКТА РОЛЛЕТНОГО ШКАФА, И СОГЛАСОВАНИЕ ЕГО С ЗАКАЗЧИКОМ
                            </div>
                        </div>
                        <div className='ball-txt wow animate__animated animate__fadeInRight' data-wow-delay='1s'>
                            <div className='ball'>3</div>
                            <span>Изготовление:</span>
                            <div className='text'>
                                ИЗГОТОВЛЕНИЕ РОЛЛЕТНОГО ШКАФА В ТЕЧЕНИИ 23 календарных дней
                            </div>
                        </div>
                        <div className='ball-txt wow animate__animated animate__fadeInRight' data-wow-delay='1.5s'>
                            <div className='ball'>4</div>
                            <span>Доставка:</span>
                            <div className='text'>
                                ОСУЩЕСТВЛЯЕМ АДРЕСНУЮ ДОСТАВКУ ИЗДЕЛИЯ
                            </div>
                        </div>
                        <div className='ball-txt wow animate__animated animate__fadeInRight' data-wow-delay='2s'>
                            <div className='ball'>5</div>
                            <span>Монтаж:</span>
                            <div className='text'>
                                СОБИРАЕМ И МОНТИРУЕМ РОЛЛЕТНЫЙ ШКАФ
                            </div>
                        </div>
                        <div className='ball-txt wow animate__animated animate__fadeInRight' data-wow-delay='2.5s'>
                            <div className='ball'>6</div>
                            <span>Сдача изделия:</span>
                            <div className='text'>
                                ВЫ ПОЛУЧАЕТЕ ГОТОВОЕ ИЗДЕЛИЕ В ПОЛНОМ СООТВЕТСТВИИ С ПРОЕКТОМ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}