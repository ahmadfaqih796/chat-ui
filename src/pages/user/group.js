import useFetchUser from "@/hooks/fetch/useFetchUser";
import WithAuth from "@/lib/session/withAuth";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export const getServerSideProps = WithAuth(async function ({ req, query }) {
  const { id, name, token } = req.session.user;
  console.log("ttttttt", name);
  return {
    props: {
      session: {
        ...req.session.user,
        receiver: query.id_receiver || null,
      },
    },
  };
});

const Group = ({ session }) => {
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:3030"); // Ganti URL sesuai dengan server Feathers.js Anda.
  const { userList, loading, setTempQuery } = useFetchUser(session.token);

  const handleSearch = (e) => {
    setTempQuery(e.target.value);
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", "Hello from client!"); // Ganti 'message' dengan event yang sesuai di server Feathers.js Anda.
  };

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleSearch}
      />

      {loading && <p>Loading...</p>}

      {userList.length > 0 ? (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

Group.layout = "User";
export default Group;
