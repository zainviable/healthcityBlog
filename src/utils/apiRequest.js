import axios from "axios";
import { baseURL } from "./config";

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
