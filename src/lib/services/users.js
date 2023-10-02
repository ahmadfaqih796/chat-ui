import ServiceAdapter from ".";

export async function getUser(token, queries) {
  const { data } = await ServiceAdapter().get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      ...queries,
    },
  });
  console.log("ddddddddddddd", data);
  return data;
}

export async function getOneUser(id, token) {
  const { data } = await ServiceAdapter().get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
