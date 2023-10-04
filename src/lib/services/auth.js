import ServiceAdapter from ".";

export async function loginService(data) {
  const { data: response } = await ServiceAdapter().post(
    "/authentication",
    data
  );
  return response;
}

export const ManagementService = async (data) => {
  const service = ServiceAdapter();
  const response = await service.fetchJson("auth-management", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
