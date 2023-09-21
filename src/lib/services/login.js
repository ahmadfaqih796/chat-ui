import ServiceAdapter from ".";

export const loginService = async (data, options = {}) => {
  const service = ServiceAdapter();
  const response = await service.fetchJson("authentication", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
