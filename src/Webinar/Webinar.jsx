import React from 'react'
import webinar from "../assets/img/webinar/traing.jfif";
import WebinarsCardComponent from './WebinarsCardComponent';

const Webinar = () => {
    return (
        <div className=''>
            {/* Upcoming Webinars banner section */}
            <section style={{
                backgroundImage: `url(${webinar})`,
                backgroundSize: "content",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
            }} className="w-full h-[347px] ">
                <div className="px-5 lg:px-24 py-8 w-full h-full bg-[#01143ab8] flex items-center">
                    <div className="text-[#fff] flex flex-col gap-5 ">
                        <h1 className="text-[40px] leading-tight font-bold">Achieve More with Health City's Training Programs</h1>
                        <p className="text-[19px]">From live webinars and self-paced online courses to immersive in-person training sessions, Health City offers comprehensive and flexible programs designed to enhance your skills and advance your career. Our expert-led courses cover the latest industry trends and best practices, providing you with the knowledge and certification needed to succeed in the healthcare field. Enjoy interactive learning experiences, personalized support, and access to a community of professionals dedicated to excellence.</p>
                    </div>
                </div>
            </section>
            {/* Upcoming Webinars banner section */}

            {/* Upcoming Webinars section */}
            <section className='px-5 lg:px-24 py-8 w-full h-full flex items-center mt-[50px] mb-[10px]'>
                <div className="">
                    <h1 className='text-[40px] font-bold text-[#01143A]'>Upcoming Webinars</h1>

                    <div className="my-[50px] flex items-center justify-center gap-12 flex-wrap w-full">
                        <WebinarsCardComponent />
                        <WebinarsCardComponent />
                        <WebinarsCardComponent />
                        <WebinarsCardComponent />
                        <WebinarsCardComponent />
                        <WebinarsCardComponent />

                    </div>

                </div>
            </section>
            {/* Upcoming Webinars section */}
        </div>
    )
}

export default Webinar