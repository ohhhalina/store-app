import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
        {
            Image: PickMeals,
            title: "Выберите блюда",
            text: "Откройте меню и выберите понравившиеся позиции из нашего ассортимента лапши."
        },
        {
            Image: ChooseMeals,
            title: "Как часто вы заказываете?",
            text: "Разовый заказ или подписка? Вы решаете, как часто получать любимую лапшу."
        },
        {
            Image: DeliveryMeals,
            title: "Быстрая доставка",
            text: "Доставим горячее блюдо прямо к вашему порогу — быстро, безопасно, удобно."
        }
    ];
    return <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ipsam voluptate minima excepturi fugiat quas obcaecati dolor hic molestiae nostrum aliquam sequi inventore necessitatibus quisquam saepe aliquid adipisci aspernatur quod.
        </p>
      </div>
      <div className="work-section-bottom">
       {workInfoData.map((data) => (
        <div className="work-section-info">
            <div className="info-boxes-img-container">
                <img src={data.Image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
        </div>
       ))}
      </div>
    </div>
}

export default Work
