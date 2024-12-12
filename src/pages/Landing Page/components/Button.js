import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        DOWNLOAD
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    padding: 0.8em 2em 0.8em 2.5em;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    color: #f6fff6;
    letter-spacing: 0.3em;
    text-shadow: -2px 2px 5px #33fd30;
    background-color: transparent;
    border: 2px solid #bbfeb1;
    box-shadow: 0 0 0px 1px #42f112,
      0 0 10px 2px #33fd30,
      inset 0 0 0px 1px #42f112,
      inset 0 0 10px 2px #33fd30;
    transition: 100ms;
  }

  .btn:hover {
    box-shadow: 0 0 0px 1px #42f112,
      0 0 10px 2px #33fd30,
      inset 0 0 0px 1px #42f112,
      inset 0 0 30px 2px #33fd30;
    text-shadow: 0 0 10px #33fd30;
    transform: translateY(-5px);
  }

  .btn:active {
    box-shadow: 0 0 0px 1px #42f112,
      0 0 25px 2px #33fd30,
      inset 0 0 0px 1px #42f112,
      inset 0 0 30px 2px #33fd30;
    transform: translateY(1px);
  }`;

export default Button;
