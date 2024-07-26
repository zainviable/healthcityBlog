import axios from "axios";
import { baseURL, webinarURL } from "./config";

const axiosConfigForContact = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const axiosConfigForAppointment = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const contactRequest = async (data) => {
  try {
    let url = `${baseURL}/submit-contact-us-with-attachment`;
    // console.log("contact submit===", url, data, axiosConfigForContact);
    const res = await axios.post(url, data, axiosConfigForContact);
    // console.log("contactRequest===", res);
    return res;
  } catch (error) {
    console.log("contactRequest===", error);
    return error;
  }
};

export const appointmentRequest = async (data) => {
  try {
    let url = `${baseURL}/appointment-contact`;
    // console.log("appointment submit===", url, data, axiosConfigForAppointment);
    const res = await axios.post(url, data, axiosConfigForAppointment);
    // console.log("appointmentRequest===", res);
    return res;
  } catch (error) {
    console.log("appointmentRequest===", error);
    return error;
  }
};

export const GetAllWebinar = async () => {
  try {
    let webinars = await axios.get(`${webinarURL}/all-webinar`);

    if (webinars.status === 200) {
      return webinars.data;
    }

  } catch (error) {
    console.log(error);
  }
}

export const GetSignalWebinar = async (id) => {
  try {
    let webinar = await axios.get(`${webinarURL}/single-webinar/${id}`);

    if (webinar.status === 200) {
      return webinar.data;
    }

  } catch (error) {
    console.log(error);
  }
}

export const GeneralUserRegister = async (userData) => {
  try {
    let webinar = await axios.get(`${webinarURL}/user-regelation`);

    if (webinar.status === 200) {
      return webinar.data;
    }

  } catch (error) {
    console.log(error);
  }
}

export const StudentRegister = async (studentDate) => {
  // name, email, institution, address, graduation_year, phone, zoom_link, date, time, payment_status, id_card
  try {
    console.log("studentDate", studentDate);

    let newData = new FormData();
    newData.append("name", studentDate.name);
    newData.append("email", studentDate.email);
    newData.append("institution", studentDate.institution);
    newData.append("address", studentDate.address);
    newData.append("graduation_year", studentDate.graduation_year);
    newData.append("phone", studentDate.phone);
    newData.append("date", studentDate.date);
    newData.append("time", studentDate.time);
    newData.append("payment_status", studentDate.payment_status);
    newData.append("id_card", studentDate.id_card);

    let webinar = await axios.post(`${webinarURL}/student-regelation`, newData, axiosConfigForContact);
    if (webinar.status === 201) {
      return webinar.data;
    }

  } catch (error) {
    console.log(error);
  }
}

export const PatreonRegister = async (patreonDate) => {
  // name, email, institution, address, graduation_year, phone, zoom_link, date, time, payment_status, id_card
  try {
    let webinar = await axios.post(`${webinarURL}/patreon-regelation`);

    if (webinar.status === 200) {
      return webinar.data;
    }

  } catch (error) {
    console.log(error);
  }
}
export const EmailSender = async (email, title, date, time, zoom) => {
  // name, email, institution, address, graduation_year, phone, zoom_link, date, time, payment_status, id_card
  try {

    let postData = { email, title, date, time, zoom }
    let webinar = await axios.post(`${webinarURL}/email-send-intent`, postData);

    if (webinar.status === 201) {
      return webinar.data;
    }

  } catch (error) {
    console.log(error);
  }
}
