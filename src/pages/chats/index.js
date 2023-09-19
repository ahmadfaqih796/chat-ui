import React, { useEffect, useState } from "react";

import io from "socket.io-client";

const ENDPOINT = "http://localhost:3030"; // Sesuaikan dengan URL backend Anda

export default function Home() {
  const [messages, setMessages] = useState([]);
  console.log("ssssss", messages);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3030");
    // Mengambil daftar pesan saat komponen dimuat
    fetch("http://localhost:3030/messages") // Ganti dengan URL server Anda
      .then((response) => response.json())
      .then((data) => setMessages(data.data))
      .catch((error) => console.error("Error fetching messages:", error));

    // Mendengarkan event "message-created" dari server
    socket.on("message-created", (message) => {
      console.log("ssssssssss", message);
      // Menambahkan pesan baru ke dalam daftar pesan
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Fungsi untuk mengirim pesan baru
  const sendMessage = () => {
    // Kirim pesan baru ke server
    fetch("http://localhost:3030/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("ddddddddddddd", data);
        // Pesan berhasil dikirim, kosongkan input pesan
        setNewMessage("");
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Kirim</button>
    </div>
  );
}
