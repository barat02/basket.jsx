import React from 'react';
import logo from '../assets/logo.png'
import nav from '../assets/nav_next.png'
import down from '../assets/nav_down.png'
import left from '../assets/nav_left.png'
import powder from '../assets/powder.png'
import cream from '../assets/cream.png'
import mask from '../assets/mask.png'



function Basket(props) {
    return (
        <div>

         <div className='basket_logo'>
    <img src={logo} alt="" />

        </div >


        <div className='head_li'>
        <li>Корзина</li>
        <img src={nav} alt="" />
       <li>Информация</li>
       <img src={nav} alt="" />
       <li>Перевозки</li>
       <img src={nav} alt="" />
       <li>Оплата</li>

        </div>
        
        <div  className='container'>
        <div className='head_info'>
            <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
            <input className='input_mail' type="text" placeholder="Электронная почта" />
        </div>

        
            
        

        <div>
            <button className='square_button'></button> Пишите мне с новостями и предложениями
        </div>

        <div className='head_delivery'>
            <h2>АДРЕС ДОСТАВКИ</h2>
            <div className='input_delivery_div'>
            <input className='input_delivery' type="text" placeholder='Страна/регион'  /> 
            <img className='nav_down' src= {down} alt="" />

            </div>
           
           
            <input className='input_name' type="text" placeholder='Имя'/> <input className='input_surname' type="text" placeholder='Фамилия' />

            <div className='adres_div'>
            <input className='input_adres' type="text" placeholder='Адрес' />

            </div>

            <div className='div_apart'>
                <input className='input_apart' type="text" placeholder='Квартира,люкс и т.д. (по желанию)' />
            </div>
            <div className='div_index'>
                <input className='input_index' type="text" placeholder='Почтовый индекс' />

            </div>

            <div className='div_number'>
                <input className='input_number' type="text" placeholder='Телефон' />
            </div> 

            <div>
            <button className='square_button'></button> Сохраните эту информацию для следующего раза
        </div>

        <p> <img src= {left} alt="" /> Вернуться в корзину </p>



           
        </div>
        
        <div className='products_powder'>
            <img src={powder} alt=""  /> 
            <p className='powder_text'>Светящийся порошок</p>
            <p className='powder_price'> 1520 сом</p>
        </div>
        

        <div className='products_cream'>
            <img src={cream} alt="" />
            <p className='cream_text'>Крем для глаз</p>
            <p className='cream_price'>2080 сом</p>

        </div>


        <div className='products_mask'> 
        <img src={mask} alt="" />
        <p className='mask_text'>МАСКА ДЛЯ СВЕТЯЩЕЙСЯ МАСКИ <br />AHA+ENZYME</p>
<p className='mask_price'>3280 сом</p>

        </div>

        <hr className='gg_line' />

        <div className='div_card'>
        <input className='input_card' type="text" placeholder='Подарочная карта или код скидки' /> <button className='card_button'>Применять</button>


       <div className='total_div'>
       <p className='total_text'>Промежуточный итог</p>
        <p className='total_price'>6880 СОМ</p>

       </div>
      

        <div className='div_perevozki'>
        <p className='text_perevozki'>Перевозки</p>
        <p className='text_step'>  Рассчитывается на следующем шаге</p>

        </div>
        <hr className='gg_line' />
        <div className='total_price_point'>
            <p className='text_total_price'>Общий</p>
            <p className='price_point'>6880 СОМ</p>

        </div>

   

        </div>

       

        

        


        </div>

      
      

        </div>
   
    );
}

export default Basket;