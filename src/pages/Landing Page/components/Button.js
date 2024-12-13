import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a href="https://dl.dropboxusercontent.com/scl/fi/cqiao4eoz4wuigpg1k0hn/TaskVenture.apk?rlkey=u7x53ox3i4vfg5o18lxax0o76&st=2k47lj4f&dl=0" download>
        <button className="comic-button">Download Now!</button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .comic-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #ff5252;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #000;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .comic-button:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }

  .comic-button:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }`;

export default Button;
