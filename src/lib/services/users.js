import ServiceAdapter from ".";

const service = ServiceAdapter();
export const getAllUser = async (token, params = {}) => {
  const response = await service.fetchJson(`users`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params: params,
  });
  console.log("xxxxxxxxxxx", response);
  return response;
};
