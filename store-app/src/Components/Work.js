import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
        {
            Image: PickMeals,
            title: "PickMeals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        {
            Image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
        },
        {
            Image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
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
