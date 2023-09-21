const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

const ServiceAdapter = () => {
  return {
    async fetchJson(endpoint, options = {}) {
      const response = await fetch(`${BASE_API}/${endpoint}`, options);
      return response.json();
    },
  };
};

export default ServiceAdapter;
