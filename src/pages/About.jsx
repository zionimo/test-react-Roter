import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>아래 버튼을 누르면 Home으로 이동합니다</p>
      <button onClick={() => navigate("/")}>Home으로 가기</button>
    </div>
  );
};

export default About;
