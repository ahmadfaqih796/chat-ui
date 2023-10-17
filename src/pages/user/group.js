import WithAuth from "@/lib/session/withAuth";
import { useState } from "react";

export const getServerSideProps = WithAuth(async function ({ req, query }) {
  const { name } = req.session.user;
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
  const [message, setMessage] = useState("");

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Kirim</button>
      </div>
    </div>
  );
};

Group.layout = "User";
export default Group;
