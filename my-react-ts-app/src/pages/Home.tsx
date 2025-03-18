import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToUser = (id: number) => {
    navigate("/user/" + id);
  };

  return (
    <>
      <h2>Homepage</h2>
      <button onClick={() => goToUser(123)}>Go to User 123</button>
      <button onClick={() => goToUser(12)}>Go to User 12</button>
      <button onClick={() => goToUser(145)}>Go to User 145</button>
      <button onClick={() => goToUser(1643)}>Go to User 1643</button>
    </>
  );
};

export default Home;
