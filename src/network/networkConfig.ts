import axios from "axios";

const horseCareInformationAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_HORSE_CARE_INFORMATION,
});

const trainerDetailsAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_TRAINER_DETAILS,
});

const horsmanDetailsAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_HORSEMAN_DETAILS,
});

const racehorsePerformanceInformationAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_RACEHORSE_PERFORMANCE_INFORMATION,
});

const raceRecordInformationAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_RACE_RECORD_INFORMATION
})

const racehorseDetailsAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL_RACEHORSE_DETAILS
})

export {
  horseCareInformationAxios,
  trainerDetailsAxios,
  horsmanDetailsAxios,
  racehorsePerformanceInformationAxios,
  raceRecordInformationAxios,
  racehorseDetailsAxios
};
