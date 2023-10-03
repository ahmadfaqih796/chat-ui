import { getUser } from "@/lib/services/users";
import { useEffect, useState } from "react";

const useFetchUser = (token) => {
  const [query, setQuery] = useState("");
  const [tempQuery, setTempQuery] = useState("");
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(tempQuery);
    }, 500);
    return () => clearTimeout(timeout);
  }, [tempQuery]);

  useEffect(() => {
    let active = true;

    // if (query !== "") {

    // } else {
    //   setUserList([]);
    //   setLoading(false);
    // }
    (async () => {
      const response = await getUser(token, {
        ...(query && {
          "name[$like]": `%${query}%`,
        }),
        $limit: -1,
      });
      if (active) {
        setUserList(response);
        setShow(true);
        setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [token, query]);

  useEffect(() => {
    (async () => {
      const response = await getUser(token, {
        $limit: -1,
      });
      setShow(true);
      setUserList(response);
      setLoading(false);
    })();
  }, [token]);

  return {
    userList,
    loading,
    show,
    setTempQuery,
  };
};

export default useFetchUser;
