import React from 'react';
import './Contacts.css';
const Contacts = () => {
  return (
    <div className="contacts">
      <h1>КОНТАКТЫ</h1>
      <div className='contacts-inform'>
        <div>
          <h4>Юридический адрес:</h4>
          <p>г. Киев, ул. Академика Вильямса 5</p>

          <h4>Контактный телефон:</h4>
          <p>(050) 667 98 87</p>

          <h4>Электронная почта:</h4>
          <p>info@bestbox.kiev.ua</p>

        </div>
        <div className='graph'>
          <h4>Режим работы:</h4>
          <p>Понедельник — Пятница</p>
          <p>с 9-00 до 18-00</p>
          <p className='red-text'>Суббота, воскресенье — выходной</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;