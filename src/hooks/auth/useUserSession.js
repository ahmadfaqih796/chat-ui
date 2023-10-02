import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => await axios.get(url);

export const useUserSession = (options) => {
  const { data, error } = useSWR("/api/auth/user", fetcher);

  if (options === "simple") {
    const newData = {
      name: data?.data?.name,
    };

    return {
      data: newData,
      error: error,
    };
  }
  return {
    data: data,
    error: error,
  };
};
