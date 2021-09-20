import React from 'react';
import './Catalog.css';
const Catalog = (props) => {

  return (
    <div className='catalog'>
      <h1>КАТАЛОГ ШКАФОВ</h1>
      {
        props.catalogPage.catalog.map(response =>
          <div >
            <div className='all-inform'>
              <div className='name-ava'>
                <div>
                  {response.name}
                </div>
                <img src={response.image} />
              </div>
              <div className='other-inform'>
                <div className='inform'>
                  <span>Размер:</span>
                  <div>
                    {response.size}
                  </div>
                </div>
                <div className='inform'>
                  <span>Обшивка:</span>
                  {response.skin.map(sk =>
                    <li>{sk}</li>)}
                </div>
                <div className='inform'>
                  <span>Роллеты:</span>
                  {response.rollers.map(rol =>
                    <li>{rol}</li>)}
                </div>
                <div className='inform'>
                  <span>Расположение механизма:</span>
                  {response.mech_location.map(mech =>
                    <li>{mech}</li>)}
                </div>
                <div className='inform'>
                  <span>Крыша:</span>
                  {response.roof.map(r =>
                    <li>{r}</li>)}
                </div>
                <div className='inform'>
                  <span>Полезная площадь ярусов хранения (Ш х Г х В):</span>
                  {response.shelves.map(s =>
                    <li>{s}</li>)}
                </div>
              </div>
            </div>
            <div className='line'></div>
          </div>
        )
      }
      <h4>ПРИМЕНЯЕМЫЕ МАТЕРИАЛЫ</h4>
      {props.catalogPage.materials.map(resp =>
        <div>
          <div className='materials'>
            <img src={resp.avatars} />
            <div className='material'>
              {resp.material}
            </div>
          </div>
        </div>)}
        <div className='inform-end'>
        Материал, из которого будет изготовлено изделие, Вы выбираете самостоятельно, исходя из своих предпочтений и потребностей.
        </div>
    </div>
  );
}

export default Catalog;