import React, { useEffect, useState } from 'react'
import webinar_image from "../assets/img/webinar/girl_with_hade.jfif";
import patreon_icon from "../assets/img/webinar/patreon_icon.png";
import selemo from "../assets/img/selemo.png";
import patreonIcon from "../assets/img/webinar/patreon_icon.png";
import toast from "react-hot-toast";
import patreon_img from "../assets/img/webinar/patreon.png";
import student_img from "../assets/img/webinar/student.png";
import general_img from "../assets/img/webinar/user.png";
import { GetSignalWebinar } from '../utils/apiRequest';
import { Link, useNavigate, useParams } from 'react-router-dom';
import store from '../redux/store';
import { SetAccountType, SetStudentData, SetUserData, SetWebinar } from '../redux/slice/webinarSlice';

const RegisterWebinarComponent = () => {

  let { id, webinarName } = useParams();
  const navigate = useNavigate()

  const [webinar, setWebinar] = useState(null)
  const [webinarDate, setWebinarDate] = useState([])
  const [webinarTime, setWebinarTime] = useState({ date: '', time: [], value: '' })

  const [student, setStudent] = useState({
    isStudent: true,
    date: "",
    time: "",
    full_name: "",
    email: "",
    institution: "",
    address: "",
    graduation_year: "",
    phone: "",
    id_card: null
  });
  const [general, setGeneral] = useState({
    isGeneral: false,
    date: "",
    time: "",
    full_name: "",
    email: "",
  });
  const [patreon, setPatreon] = useState({
    isPatreon: false,
    date: "",
    time: "",
    full_name: "",
    email: "",
    patreon_id: ""
  });

  useEffect(() => {
    (async () => {
      let webinarValue = await GetSignalWebinar(id);

      setWebinar(webinarValue);
      if (webinarValue) {
        store.dispatch(SetWebinar(webinarValue));
        let webinar_outline = document.getElementById("webinar_description");
        if (webinar_outline) {
          webinar_outline.innerHTML = webinarValue?.description
          // console.log("webinar", JSON.parse(webinarValue?.webinar_date) );
          let time = JSON.parse(webinarValue?.webinar_date);
          setWebinarDate(time);
          setWebinarTime({ ...time[0], value: time[0].time[0] });
          // console.log('dsf', time[0]);
        }

      }
    }
    )()
  }, []);

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

  // console.log("webinar S", webinarTime);
  console.log("student", student);
  console.log("general", general);
  console.log("patreon", patreon);

  const handleSetDate = (event, type) => {
    if (type === 'student') {
      setStudent({ ...student, date: event.target.value });
    } else if (type === 'user') {
      setGeneral({ ...general, date: event.target.value });
    } else if (type === 'patreon') {
      setPatreon({ ...patreon, date: event.target.value });
    }
    // const selectedDate = event.target.index;
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedIndex = selectedOption.getAttribute('index');
    setWebinarTime(webinarDate[selectedIndex]);
  };

  const handleSetTime = (event, type) => {
    // console.log("xxxxxxxx");
    if (type === 'student') {
      setStudent({ ...student, time: event.target.value });
    } else if (type === 'user') {
      setGeneral({ ...general, time: event.target.value });
    } else if (type === 'patreon') {
      setPatreon({ ...patreon, time: event.target.value });
    }

    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedIndex = selectedOption.getAttribute('index');

    setWebinarTime({ ...webinarTime, value: webinarTime.time[selectedIndex] });
    // Perform any additional actions here
  };

  // console.log("student", webinarTime.time[0]);

  const handelStudentRegistration = () => {

    if (student.date === "") {
      toast.error("Data must be select!");
    } else if (student.time === "") {
      toast.error("Time must be select!");
    } else if (student.full_name === "") {
      toast.error("Name must be add!");
    } else if (student.email === "") {
      toast.error("email must be add!");
    } else if (student.institution === "") {
      toast.error("Institution must be add!");
    } else if (student.address === "") {
      toast.error("Address must be add!");
    } else if (student.graduation_year === "") {
      toast.error("Graduation Year must be add!");
    } else if (student.phone === "") {
      toast.error("Phone Number must be add!");
    } else if (student.id_card === null) {
      toast.error("Student Id must be add!");
    } else {
      store.dispatch(SetStudentData(student));
      // store.dispatch(SetWebinar(student));
      store.dispatch(SetAccountType("student"));
      navigate("/health-city/webinar/checkout");
    }
  }

  const handelGeneralUserRegistration = () => {

    if (general.date === "") {
      toast.error("Data must be select!");
    } else if (general.time === "") {
      toast.error("Time must be select!");
    } else if (general.full_name === "") {
      toast.error("Name must be add!");
    } else if (general.email === "") {
      toast.error("email must be add!");
    } else {
      store.dispatch(SetUserData(general));
      // store.dispatch(SetWebinar(student));
      store.dispatch(SetAccountType("user"));
      navigate("/health-city/webinar/checkout");
    }
  }

  const handelPatreonRegistration = () => {

    if (patreon.date === "") {
      toast.error("Data must be select!");
    } else if (patreon.time === "") {
      toast.error("Time must be select!");
    } else if (patreon.full_name === "") {
      toast.error("Name must be add!");
    } else if (patreon.email === "") {
      toast.error("email must be add!");
    } else if (patreon.patreon_id === "") {
      toast.error("patreon id must be add!");
    } else {
      store.dispatch(SetUserData(patreon));
      // store.dispatch(SetWebinar(student));
      store.dispatch(SetAccountType("patreon"));
      return
      // navigate("/health-city/webinar/checkout");
    }
  }

  return (
    <div>
      <section style={{
        backgroundImage: `url(${webinar_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} className="w-full h-[470px] ">
        <div className="px-5 lg:px-24 py-8 w-full h-full bg-[#01143ab7] flex items-center justify-center">
          <div className="text-[#fff] flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-[22px] lg:text-[40px] leading-tight font-bold">{webinar?.title}</h1>
            <a href='#register' className="bg-[#5c9516] py-[10px] px-[15px] w-[200px] rounded font-semibold">Register Now</a>

            <div className="flex items-center justify-center gap-4 lg:gap-10">
              <div className="p-1 lg:p-2">
                <p className='text-[25px] lg:text-[60px]'>01</p>
                <p>Days</p>
              </div>
              <div className="border-r-2 w-2 h-[70px]"></div>
              <div className="p-1 lg:p-2">
                <p className='text-[25px] lg:text-[60px]'>32</p>
                <p>Hours</p>
              </div>
              <div className="border-r-2 w-2 h-[70px]"></div>
              <div className="p-1 lg:p-2">
                <p className='text-[25px] lg:text-[60px]'>59</p>
                <p>Minutes</p>
              </div>
              <div className="border-r-2 w-2 h-[70px]"></div>
              <div className="">
                <p className='text-[25px] lg:text-[60px]'>20</p>
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
        <div className="flex items-center justify-center flex-wrap gap-[100px] my-10">
          <div className="border rounded-md w-[270px] h-[190px] flex flex-col items-center justify-center gap-2 shadow-md">
            <img src={patreon_img} alt="" />
            <h3 className='font-semibold'>General Users</h3>
            <p className='text-[20px] font-bold'>£ {webinar?.price_user}</p>
          </div>
          <div className="border rounded-md w-[270px] h-[190px] flex flex-col items-center justify-center gap-2 shadow-md">
            <img src={student_img} alt="" />
            <h3 className='font-semibold'>Student Ticket</h3>
            <p className='text-[20px] font-bold'>£ {webinar?.price_student}</p>
          </div>
          <div className="border rounded-md w-[270px] h-[190px] flex flex-col items-center justify-center gap-2 shadow-md">
            <img src={general_img} alt="" />
            <h3 className='font-semibold'>Patreon Member</h3>
            <p className='text-[20px] font-bold'>{webinar?.price_patreon}</p>
          </div>
        </div>

        <div id='register' className="flex flex-col items-center justify-center">
          <h3 className='text-[30px] font-bold'>RECORDED VIDEO WEBINAR.</h3>
          <p className='text-[16px] text-[#000]'>If you prefer the recorded video webinar, it is available at patreon for you.</p>
          <p className='text-[16px] text-[#000]'>To buy and view at <span className='text-[18px] font-semibold'>£25.</span></p>
          <Link to="http://www.patreon.com/HealthCityUK" target='_blank' className="bg-[#5c9516] py-[10px] px-[15px] w-[200px] rounded mt-3 font-semibold text-[#fff] text-center">Buy Now</Link>
        </div>

        <div className="w-full relative flex items-center justify-center my-[50px]">
          <div className="bg-[#fff] absolute top-0 p-5 rounded-2xl text-center w-[100%] lg:w-[60%]">
            <h4 className='text-[30px] font-bold mb-6'>Register</h4>

            <div className="flex items-center justify-between flex-wrap flex-col lg:flex-row gap-5">
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
            student.isStudent && <div className="w-[100%] lg:w-[550px] flex items-center justify-center flex-col  gap-3 mt-[180px] lg:mt-0">
              <div className="p-3">
                <div className="flex items-center justify-between flex-col lg:flex-row gap-5">
                  <div className="w-full">
                    <p className="text-[15px] font-semibold">Date <span className="text-[#c43131]">*</span></p>
                    <select value={student?.date} onChange={(e) => handleSetDate(e, 'student')} className='w-full lg:w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                      {
                        webinarDate && webinarDate?.map((item, i) => (
                          <option key={i} index={i} value={item?.date}>{item?.date}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="w-full">
                    <p className="text-[15px] font-semibold">Time <span className="text-[#c43131]">*</span></p>

                    <select value={student.time} onClick={(e) => handleSetTime(e, 'student')} onChange={(e) => handleSetTime(e, 'student')} className='w-full lg:w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                      {
                        webinarTime?.time?.map((item, i) => (
                          <option key={i} index={i} value={item}>{item}</option>
                        ))
                      }
                    </select>

                    {/* <select value={webinarTime.time[0]} onChange={handleSetTime} className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    
                    {
                      webinarTime && webinarTime?.time?.map((item, i) => (
                        <option key={i} onClick={handleSetTime} index={i} value={item}>{item}</option>
                      ))
                    }
                  </select> */}
                  </div>
                </div>

                <div className="flex items-center justify-between flex-col lg:flex-row gap-5">
                  <div className="w-full">
                    <p className="text-[15px] font-semibold">Full Name <span className="text-[#c43131]">*</span></p>
                    <input type="text" value={student?.full_name} onChange={e => setStudent({ ...student, full_name: e.target.value })} placeholder='Full name' className='w-full lg:w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                  </div>
                  <div className="w-full">
                    <p className="text-[15px] font-semibold">Email <span className="text-[#c43131]">*</span></p>
                    <input type="email" value={student?.email} onChange={e => setStudent({ ...student, email: e.target.value })} placeholder="Student Registrar's Email" className='w-full lg:w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <p className="text-[15px] font-semibold">Institution <span className="text-[#c43131]">*</span></p>
                    <input type="text" value={student?.institution} onChange={e => setStudent({ ...student, institution: e.target.value })} placeholder='Name of Institution/School' className='w-full bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <p className="text-[15px] font-semibold">Full Address <span className="text-[#c43131]">*</span></p>
                    <input type="text" value={student?.address} onChange={e => setStudent({ ...student, address: e.target.value })} placeholder='Write your full address' className='w-full bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                  </div>
                </div>

                <div className="w-full flex items-center gap-5 justify-between flex-wrap lg:flex-row">
                  <div className="w-full">
                    <p className="text-[15px] font-semibold">Graduation year <span className="text-[#c43131]">*</span></p>
                    <input type="text" value={student?.graduation_year} onChange={e => setStudent({ ...student, graduation_year: e.target.value })} placeholder='2024' className='w-full lg:w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                  </div>
                  <div className="w-full">
                    <p className="text-[15px] font-semibold">Phone Number <span className="text-[#c43131]">*</span></p>
                    <input type="number" value={student?.phone} onChange={e => setStudent({ ...student, phone: e.target.value })} placeholder='Enter your phone number' className='w-full lg:w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#E6E8EC] py-4 px-4 mt-3 rounded-md">
                  <p>Upload your Student ID <span className="text-[#ef4848]">*</span></p>
                  <button className="bg-[#fff] px-5 py-1 rounded-md font-semibold">
                    <label htmlFor="char-img">
                      <input type="file" onChange={e => setStudent({ ...student, id_card: e.target.files[0] })} name="char-img" id="char-img" className='hidden' />
                      Upload File
                    </label>
                  </button>

                </div>

                <div className="flex items-center justify-center mt-7">
                  <button onClick={handelStudentRegistration} className="bg-[#061C3D] py-[10px] px-[15px] w-[200px] rounded-md font-semibold text-[#fff]">Register Now</button>
                </div>
              </div>
            </div>
          }

          {/* general form */}
          {
            general.isGeneral && <div className="w-[550px] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Date <span className="text-[#c43131]">*</span></p>
                  <select value={general.date} onChange={(e) => handleSetDate(e, 'user')} className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    {
                      webinarDate && webinarDate?.map((item, i) => (
                        <option key={i} index={i} value={item?.date}>{item?.date}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="">
                  <p className="text-[15px] font-semibold">Time <span className="text-[#c43131]">*</span></p>

                  <select value={general.time} onClick={(e) => handleSetTime(e, 'user')} onChange={(e) => handleSetTime(e, 'user')} className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    {
                      webinarTime?.time?.map((item, i) => (
                        <option key={i} index={i} value={item}>{item}</option>
                      ))
                    }
                  </select>

                  {/* <select value={webinarTime.time[0]} onChange={handleSetTime} className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    
                    {
                      webinarTime && webinarTime?.time?.map((item, i) => (
                        <option key={i} onClick={handleSetTime} index={i} value={item}>{item}</option>
                      ))
                    }
                  </select> */}
                </div>
              </div>

              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Full Name <span className="text-[#c43131]">*</span></p>
                  <input type="text" value={general.full_name} onChange={e => setGeneral({ ...general, full_name: e.target.value })} placeholder='Full name' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Email <span className="text-[#c43131]">*</span></p>
                  <input type="email" value={general.email} onChange={e => setGeneral({ ...general, email: e.target.value })} placeholder="Student Registrar's Email" className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="flex items-center justify-center mt-7">
                <button onClick={handelGeneralUserRegistration} className="bg-[#061C3D] py-[10px] px-[15px] w-[200px] rounded-md font-semibold text-[#fff]">Register Now</button>
              </div>
            </div>
          }

          {/* patreon form */}
          {
            patreon.isPatreon && <div className="w-[550px] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Date <span className="text-[#c43131]">*</span></p>
                  <select value={patreon.date} onChange={(e) => handleSetDate(e, 'patreon')} className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    {
                      webinarDate && webinarDate?.map((item, i) => (
                        <option key={i} index={i} value={item?.date}>{item?.date}</option>
                      ))
                    }
                  </select>
                </div>

                <div className="">
                  <p className="text-[15px] font-semibold">Time <span className="text-[#c43131]">*</span></p>

                  <select value={patreon.time} onClick={(e) => handleSetTime(e, 'patreon')} onChange={(e) => handleSetTime(e, 'user')} className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-2 outline-none'>
                    {
                      webinarTime?.time?.map((item, i) => (
                        <option key={i} index={i} value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <p className="text-[15px] font-semibold">Full Name <span className="text-[#c43131]">*</span></p>
                  <input type="text" value={patreon.full_name} onChange={e => setPatreon({ ...patreon, full_name: e.target.value })} placeholder='Full name' className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
                <div className="">
                  <p className="text-[15px] font-semibold">Email <span className="text-[#c43131]">*</span></p>
                  <input type="email" value={patreon.email} onChange={e => setPatreon({ ...patreon, email: e.target.value })} placeholder="Student Registrar's Email" className='w-[260px] bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="">
                <div className="">
                  <p className="text-[15px] font-semibold">Patreon ID <span className="text-[#c43131]">*</span></p>
                  <input type="text" value={patreon.patreon_id} onChange={e => setPatreon({ ...patreon, patreon_id: e.target.value })} placeholder='Your Patreon ID' className='w-full bg-[#E6E8EC] rounded-md h-[45px] px-3 outline-none' />
                </div>
              </div>

              <div className="flex flex-col gap-3 items-center justify-center mt-7">
                {/* <div className=""> */}
                <button onClick={handelPatreonRegistration} className="bg-[#061C3D] py-[10px] px-[15px] w-[200px] rounded-md font-semibold text-[#fff]">Register Now</button>
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
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <img src={`http://52.52.171.224:8000/${webinar?.facilitator_image}`} className='w-[350px]' alt="FACILITATOR" />
          </div>
          <div className="p-10">
            <h5 className='text-[15px] font-semibold my-5'>{webinar?.facilitator_title}</h5>

            <p className='text-[14px]'>
              {webinar?.facilitator_description}
            </p>
          </div>
        </div>
      </section>
      {/* FACILITATOR section */}

      {/* OVERVIEW section */}
      <section>
        <h1 className='py-8 text-center text-[30px] font-bold'>OVERVIEW</h1>
        <div id='webinar_description' className="px-5 lg:px-[20%] py-8 w-full">

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