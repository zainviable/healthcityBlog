import React from 'react'
import webinarCard from "../assets/img/webinar/card_image.png";
import { useNavigate } from 'react-router-dom';

const WebinarsCardComponent = ({ webinar }) => {
    let navigate = useNavigate();

    let addText = (value) => {
        let webinarName = value.replace("/", '-').split(' ').join("-");
        return webinarName;
    }

    return (
        <div onClick={() => navigate(`/health-city/webinar/${webinar._id}/${addText(webinar.title)}`)} className='w-[320px] cursor-pointer'>
            <div className="flex justify-end">
                <div className="bg-[#ffffff] p-3 rounded-t-3xl">
                    <img className='w-[250px]' src={`http://52.52.171.224:8000/${webinar?.webinar_banner}`} alt="webinar card" />
                </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#fffffff7] shadow-xl rounded-md">
                <div className='text-center'>
                    <p className='text-[#6eb219] text-[15px] m-0 p-0'>Jun</p>
                    <p className='text-[25px] font-bold p-0 m-0'>14</p>
                </div>
                <p className='text-[16px] font-semibold'>{webinar.title}</p>
            </div>
        </div>
    )
}

export default WebinarsCardComponent