import { useState, useEffect } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("https://whatthecommit.com/index.json")
    .then((response) => response.json())
    .then((data) => {
      setMsg(data.commit_message);
    })
    .catch((error) => {
      // Handle errors
    });
  }, []);

  return (
    <div className="App">
      {msg}
    </div>
  );
}