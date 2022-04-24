import { useState, useEffect } from "react";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Me");
  }, []);

  return <div 
  style={{ textAlign: "center" }}>
    {/* Fuck this assignment - {name} */}
  <img src="https://i.pinimg.com/736x/15/ac/d8/15acd8f4d8071c0b4a6eab8e92c3ecc1.jpg" alt="pain" />
  </div>;
};

export default Home;
