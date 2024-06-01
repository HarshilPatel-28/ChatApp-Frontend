import React from 'react'
import styled from "styled-components";
import { BiPowerOff } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleClick= async()=>{
    localStorage.clear();
    navigate("/login");
  }

  const handleAvatar= async()=>{
    
    navigate("/setAvatar");
  }
  return (
    <>
    <div className='btns'>

    <Button  onClick={handleClick}>
      <BiPowerOff />
    </Button>
    <Button  onClick={handleAvatar}>
      <RxAvatar />
    </Button>
    </div>
    </>
  )
}

const Button = styled.button`

display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
border-radius: 0.5rem;
background-color: #9a86f3;
border: none;
cursor: pointer;

svg {
  font-size: 1.3rem;
  color: #ebe7ff;
}
`;
export default Logout
