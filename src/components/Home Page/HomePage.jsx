import React from 'react';
import './HomePage.css';
import Tire from '../../images/tire.jpg'
import Box from '../../images/box.jpg'
import Skis from '../../images/skis.jpg'
import Tools from '../../images/tools.jpg'
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {

    let catalogButton = () =>{
        return <Redirect to='/catalog'/>
    }

    return (
        <div className='home-page'>
            <div className='center'>
                <div className='grand-center'>
                    <div className='grand-text'>
                        <h1>Металлические шкафы для <br /> парковки</h1>
                        <span>Оптимизируй пространство своей парковки</span>
                    </div>
                    <div className='buttons'>
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
                <div className='txt-img'>
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
                        <div className='ball-txt'>
                            <div className='ball'>1</div>
                            <span>Обмеры:</span>
                            <div className='text'>
                                ВЫЕЗД ЗАМЕРЩИКА НА ОБЪЕКТ, ЗАМЕР РАЗМЕРОВ ПАРКОВОЧНОГО МЕСТА, ОБСУЖДЕНИЕ КОМПЛЕКТАЦИИ И ДЕТАЛЕЙ.
                            </div>
                        </div>
                        <div className='ball-txt'>
                            <div className='ball'>2</div>
                            <span>Проект:</span>
                            <div className='text'>
                                РАЗРАБОТКА ПРОЕКТА РОЛЛЕТНОГО ШКАФА, И СОГЛАСОВАНИЕ ЕГО С ЗАКАЗЧИКОМ.
                            </div>
                        </div>
                        <div className='ball-txt'>
                            <div className='ball'>3</div>
                            <span>Изготовление:</span>
                            <div className='text'>
                                ИЗГОТОВЛЕНИЕ РОЛЛЕТНОГО ШКАФА В СООТВЕТСТВИИ С СОГЛАСОВАННЫМИ РАЗМЕРАМИ И КОМПЛЕКТАЦИЕЙ В ТЕЧЕНИИ 2-3 НЕДЕЛЬ.
                            </div>
                        </div>
                        <div className='ball-txt'>
                            <div className='ball'>4</div>
                            <span>Доставка:</span>
                            <div className='text'>
                                ОСУЩЕСТВЛЯЕМ АДРЕСНУЮ ДОСТАВКУ ИЗДЕЛИЯ.
                            </div>
                        </div>
                        <div className='ball-txt'>
                            <div className='ball'>5</div>
                            <span>Монтаж:</span>
                            <div className='text'>
                                СОБИРАЕМ И МОНТИРУЕМ РОЛЛЕТНЫЙ ШКАФ.
                            </div>
                        </div>
                        <div className='ball-txt'>
                            <div className='ball'>6</div>
                            <span>Сдача изделия:</span>
                            <div className='text'>
                                ВЫ ПОЛУЧАЕТЕ ГОТОВОЕ ИЗДЕЛИЕ В ПОЛНОМ СООТВЕТСТВИИ С ПРОЕКТОМ.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}