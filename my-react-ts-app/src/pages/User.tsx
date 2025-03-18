import React from "react";
import { useParams } from "react-router-dom";

interface UserParams extends Record<string, string | undefined> {
  id: string;
}

const User: React.FC = () => {
  const { id } = useParams<UserParams>();

  return <div>User ID: {id}</div>;
};

export default User;
