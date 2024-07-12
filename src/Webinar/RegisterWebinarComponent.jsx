import React, { useState } from 'react'
import webinar from "../assets/img/webinar/girl_with_hade.jfif";
import patreon_icon from "../assets/img/webinar/patreon_icon.png";
import selemo from "../assets/img/Dr.Francis-Selemo-Best-holistic-healthcare-provider.png";
import patreonIcon from "../assets/img/webinar/patreon_icon.png";
import patreon_img from "../assets/img/webinar/patreon.png";
import student_img from "../assets/img/webinar/student.png";
import general_img from "../assets/img/webinar/user.png";

const RegisterWebinarComponent = () => {

  const [student, setStudent] = useState({
    isStudent: true,
  });
  const [general, setGeneral] = useState({
    isGeneral: false,
  });
  const [patreon, setPatreon] = useState({
    isPatreon: false,
  });

  const handelStudentFunction = () => {
    setStudent({ ...student, isStudent: true });
    setGeneral({ ...general, isGeneral: false });
    setPatreon({ ...patreon, isPatreon: false });
  }
  const handelGeneralUserFunction = () => {
    setStudent({ ...student, isStudent: false });
    setGeneral({ ...general, isGeneral: true });
    setPatreon({ ...patreon, isPatreon: false });
  }
  const handelPatreonFunction = () => {
    setStudent({ ...student, isStudent: false });
    setGeneral({ ...general, isGeneral: false });
    setPatreon({ ...patreon, isPatreon: true });
  }

  return (
    <div>
      <section style={{
        backgroundImage: `url(${webinar})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} className="w-full h-[470px] ">
        <div className="px-5 lg:px-24 py-8 w-full h-full bg-[#01143ab8] flex items-center justify-center">
          <div className="text-[#fff] flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-[40px] leading-tight font-bold">NAVIGATING GLOBAL TRAUMAS/CONFLICTS IN THE WORKPLACE.</h1>
            <a href='#register' className="bg-[#5c9516] py-[10px] px-[15px] w-[200px] rounded font-semibold">Register Now</a>

            <div className="flex items-center justify-center gap-10">
              <div className="p-2">
                <p className='text-[60px]'>01</p>
                <p>Days</p>
              </div>
              <div className="border-r-2 w-2 h-[70px]"></div>
              <div className="p-2">
                <p className='text-[60px]'>32</p>
                <p>Hours</p>
              </div>
              <div className="border-r-2 w-2 h-[70px]"></div>
              <div className="p-2">
                <p className='text-[60px]'>59</p>
                <p>Minutes</p>
              </div>
              <div className="border-r-2 w-2 h-[70px]"></div>
              <div className="">
                <p className='text-[60px]'>20</p>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKETS section */}
      <section className='px-5 lg:px-24 py-8 w-full' >
        <div className="w-full text-center">
          <h2 className='text-[30px] font-bold'>TICKETS</h2>
          <p className='font-medium'>Choose your ticket option below and enjoy exclusive benefits.</p>
        </div>
        <div className="flex items-center justify-center gap-[100px] my-10">
          <div className="border rounded-md w-[270px] h-[190px] flex flex-col items-center justify-center gap-2 shadow-md">
            <img src={patreon_img} alt="" />
            <h3 className='font-semibold'>Patreon Member</h3>
            <p className='text-[20px] font-bold'>Free</p>
          </div>
          <div className="border rounded-md w-[270px] h-[190px] flex flex-col items-center justify-center gap-2 shadow-md">
            <img src={student_img} alt="" />
            <h3 className='font-semibold'>Patreon Member</h3>
            <p className='text-[20px] font-bold'>Free</p>
          </div>
          <div className="border rounded-md w-[270px] h-[190px] flex flex-col items-center justify-center gap-2 shadow-md">
            <img src={general_img} alt="" />
            <h3 className='font-semibold'>Patreon Member</h3>
            <p className='text-[20px] font-bold'>Free</p>
          </div>
        </div>

        <div id='register' className="flex flex-col items-center justify-center">
          <h3 className='text-[30px] font-bold'>RECORDED VIDEO WEBINAR.</h3>
          <p className='text-[16px] text-[#000]'>If you prefer the recorded video webinar, it is available at patreon for you.</p>
          <p className='text-[16px] text-[#000]'>To buy and view at <span className='text-[18px] font-semibold'>£25.</span></p>
          <button className="bg-[#5c9516] py-[10px] px-[15px] w-[200px] rounded mt-3 font-semibold text-[#fff]">Buy Now</button>
        </div>

        <div className="w-full relative flex items-center justify-center my-[50px]">
          <div className="bg-[#fff] absolute top-0 p-5 rounded-2xl text-center w-[60%]">
            <h4 className='text-[30px] font-bold mb-6'>Register</h4>

            <div className="flex items-center justify-between">
              <p className='text-[20px] font-bold'>Register As</p>

              <button onClick={handelStudentFunction} className={` flex items-center justify-center gap-3 py-[10px] px-[15px] w-[200px] rounded-xl font-semibold ${student.isStudent ? 'bg-[#ffffff] border-2 border-[#262E3D]' : 'bg-[#262E3D] text-[#fff]'}`}>
                <div className={`w-5 h-5 rounded-full ${student.isStudent ? 'bg-[#262E3D]' : 'border border-[#fff]'}`}></div>
                Student
              </button>

              <button onClick={handelGeneralUserFunction} className={` flex items-center justify-center gap-3 py-[10px] px-[15px] w-[200px] rounded-xl font-semibold ${general.isGeneral ? 'bg-[#ffffff] border-2 border-[#262E3D]' : 'bg-[#262E3D] text-[#fff]'}`}>
                <div className={`w-5 h-5 rounded-full ${general.isGeneral ? 'bg-[#262E3D]' : 'border border-[#fff]'}`}></div>
                General Users
              </button>

              <button onClick={handelPatreonFunction} className={` flex items-center justify-center gap-3 py-[10px] px-[15px] w-[200px] rounded-xl font-semibold ${patreon.isPatreon ? 'bg-[#ffffff] border-2 border-[#262E3D]' : 'bg-[#262E3D] text-[#fff]'}`}>
                <div className={`w-5 h-5 rounded-full ${patreon.isPatreon ? 'bg-[#262E3D]' : 'border border-[#fff]'}`}></div>
                Patreon Member
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* TICKETS section */}

      {/* Form Section */}
      <section className='bg-[#5c9516] flex items-center justify-center pt-[100px] pb-8'>
        <div className="">

          {/* student form */}
          {
            student.isStudent && <div className="w-[550px] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Date <span className="text-[#c43131]">*</span></p>
                  <select className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    <option value="Tus - 30 2024">Tus - 30 2024</option>
                  </select>
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Time <span className="text-[#c43131]">*</span></p>
                  <select className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    <option value="10: 00 am">10:00 AM</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Full Name <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='Full name' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Email <span className="text-[#c43131]">*</span></p>
                  <input type="email" placeholder="Student Registrar's Email" className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="">
                <div className="">
                  <p className="text-[15px] font-semibold">Institution <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='Name of Institution/School' className='w-full bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="">
                <div className="">
                  <p className="text-[15px] font-semibold">Full Address <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='Write your full address' className='w-full bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="flex items-center gap-5 justify-between">
                <div className="">
                  <p className="text-[15px] font-semibold">Graduation year <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='2024' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Phone Number <span className="text-[#c43131]">*</span></p>
                  <input type="number" placeholder='Enter your phone number' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#E6E8EC] py-4 px-4 mt-3 rounded-md">
                <p>Upload your Student ID <span className="text-[#ef4848]">*</span></p>
                <button className="bg-[#fff] px-5 py-1 rounded-md font-semibold">
                  <label htmlFor="">
                    <input type="file" name="char-img" id="char-img" className='hidden' />
                    Upload File
                  </label>
                </button>

              </div>

              <div className="flex items-center justify-center mt-7">
                <button className="bg-[#061C3D] py-[10px] px-[15px] w-[200px] rounded-md font-semibold text-[#fff]">Register Now</button>
              </div>
            </div>
          }

          {/* general form */}
          {
            general.isGeneral && <div className="w-[550px] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Date <span className="text-[#c43131]">*</span></p>
                  <select className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    <option value="Tus - 30 2024">Tus - 30 2024</option>
                  </select>
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Time <span className="text-[#c43131]">*</span></p>
                  <select className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    <option value="10: 00 am">10:00 AM</option>
                  </select>
                </div>
              </div>

              {/* <div className="">
                <div className="">
                  <p>Institution*</p>
                  <input type="text" />
                </div>
                <div className="">
                  <p>Full Address*</p>
                  <input type="email" name="" id="" />
                </div>
              </div> */}
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Full Name <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='Full name' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Email <span className="text-[#c43131]">*</span></p>
                  <input type="email" placeholder="Student Registrar's Email" className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="flex items-center justify-center mt-7">
                <button className="bg-[#061C3D] py-[10px] px-[15px] w-[200px] rounded-md font-semibold text-[#fff]">Register Now</button>
              </div>
            </div>
          }

          {/* patreon form */}
          {
            patreon.isPatreon && <div className="w-[550px] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Date <span className="text-[#c43131]">*</span></p>
                  <select className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    <option value="Tus - 30 2024">Tus - 30 2024</option>
                  </select>
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Time <span className="text-[#c43131]">*</span></p>
                  <select className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    <option value="10: 00 am">10:00 AM</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Full Name <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='Full name' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Email <span className="text-[#c43131]">*</span></p>
                  <input type="email" placeholder="Student Registrar's Email" className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="">
                <div className="">
                  <p className="text-[15px] font-semibold">Patreon ID <span className="text-[#c43131]">*</span></p>
                  <input type="text" placeholder='Your Patreon ID' className='w-full bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="flex flex-col gap-3 items-center justify-center mt-7">
                {/* <div className=""> */}
                <button className="bg-[#061C3D] py-[10px] px-[15px] w-[200px] rounded-md font-semibold text-[#fff]">Register Now</button>
                {/* </div> */}

                <p>Or</p>

                <button className="bg-[#ffffff] py-[10px] px-[15px] rounded-md font-semibold text-[#535151] flex items-center justify-center gap-4">
                  <img src={patreon_icon} alt="patreo n icon" />
                  Register with Patreon</button>
              </div>
            </div>
          }

        </div>
      </section>
      {/* Form Section */}

      {/* FACILITATOR section */}
      <section className='px-5 lg:px-24 py-8 w-full'>

        <h1 className='py-8 text-center text-[30px] font-bold'>FACILITATOR</h1>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <img src={selemo} className='w-[350px]' alt="FACILITATOR" />
          </div>
          <div className="p-10">
            <h5 className='text-[15px] font-semibold my-5'>Dr. Benaliligha Francis Selemo, Clinical Psychologist & Cognitive Behavioural Therapist in Staff/Organisational Wellbeing, Global Trauma/Conflicts, etc.</h5>

            <p className='text-[14px]'>
              He is a consultant-grade psychologist, an author/speaker and a psychological consultant in staff/organisational wellbeing, global trauma/conflicts, etc. He has plus 29 years’ psychology work experience and a co-author of more than 10 wellbeing books. He specialises in the application of psychological trauma informed care to patients’, workplace/schools’, organisations’, and communities’ mental health resilience and improvement. He work interest includes: psychological impact of global conflicts/trauma; migration; relationships; complex trauma; addictions; birth trauma/stress for fathers;  neurodiversity; cultural and faith issues; psychological impact of food security/agriculture, etc.
            </p>
          </div>
        </div>
      </section>
      {/* FACILITATOR section */}

      {/* OVERVIEW section */}
      <section>
        <h1 className='py-8 text-center text-[30px] font-bold'>OVERVIEW</h1>
        <div className="px-5 lg:px-24 py-8 w-full">
          Webinar Out line
        </div>

        <div className="flex items-center justify-center my-8">
          <a href='#register' className="bg-[#5c9516] text-center text-[#fff] py-[10px] px-[15px] w-[200px] rounded font-semibold">Register Now</a>
        </div>
      </section>
      {/* OVERVIEW section */}

    </div>
  )
}

export default RegisterWebinarComponent