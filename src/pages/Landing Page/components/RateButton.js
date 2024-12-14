import React, { useState } from 'react';
import styled from 'styled-components';
import RateModal from './RateModal';
const Button = () => {
  
  const [isRateModalOpen, setRateModalOpen] = useState(false);

  const openModal = () => setRateModalOpen(true);
  const closeModal = () => setRateModalOpen(false);

  return (
    <StyledWrapper>
      <button onClick={openModal}>RATE US</button>
     {/* RateModal Component */}
      <RateModal isOpen={isRateModalOpen} onClose={closeModal} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background: #fbca1f;
    font-family: inherit;
    padding: 10px;
    font-weight: 900;
    font-size: 14px;
    border: 3px #fbca1f;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    cursor: pointer;
    color:rgb(51, 51, 51);
  }

  button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }`;

export default Button;
