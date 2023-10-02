import axios from "axios";
const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

// const ServiceAdapter = () => {
//   return {
//     async fetchJson(endpoint, options = {}) {
//       const response = await fetch(`${BASE_API}/${endpoint}`, options);
//       return response.json();
//     },
//   };
// };
const ServiceAdapter = () => {
  return axios.create({
    baseURL: BASE_API,
    responseType: "json",
  });
};
export default ServiceAdapter;
