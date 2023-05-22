import axios from "axios";

const horseCareInformationAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_HORSE_CARE_INFORMATION,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

const trainerDetailsAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_TRAINER_DETAILS,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

const horsmanDetailsAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_HORSEMAN_DETAILS,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

const racehorsePerformanceInformationAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_RACEHORSE_PERFORMANCE_INFORMATION,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

const raceRecordInformationAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_RACE_RECORD_INFORMATION,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

const racehorseDetailsAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_RACEHORSE_DETAILS,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export {
  horseCareInformationAxios,
  trainerDetailsAxios,
  horsmanDetailsAxios,
  racehorsePerformanceInformationAxios,
  raceRecordInformationAxios,
  racehorseDetailsAxios,
};
