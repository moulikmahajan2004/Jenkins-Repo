import React from 'react';
import './stripe.css';

const Payment = () => {
  

  return (
    <>
    {/* <stripe-pricing-table
      pricing-table-id="prctbl_1O1V2XSDEQySCvaLcW4X9Qcf"
      publishable-key="pk_test_51NzT8DSDEQySCvaLfQRkI36xW6gUGjrd7zSLZIttwikfKUGbO8S22RCA1aO4dQJX2HUj8i7CImngXpzg9xyOkrhI000KAftEXS"
  ></stripe-pricing-table> */}
<div className="card-container">
      <div className="card">
        <h3>FREE</h3>
        <p>UNLOCK BASIC</p>
        <p>SPEED RATE INCREASE</p>
        <p>DATA TRANSFER 🎯</p>
        <h2>💵3000</h2>
        <a href="https://buy.stripe.com/test_cN24ihecF44v5uUcMT">
  <button>PURCHASE</button>
  </a>
      </div>

      <div className="card">
        <h3>GOLD</h3>
        <p>UPLOAD PHOTO FEATURE</p>
        <p>MULTIPLE PACKAGES</p>
        <p>DATA TRANSFER 🎯</p>
        <h2>💵6000</h2>
        <a href="https://buy.stripe.com/test_3cs0218SlgRh0aAbIO">
  <button>PURCHASE</button>
  </a>
      </div>

      <div className="card">
        <h3>PLATINUM</h3>
        <p>UPLOAD PHOTO</p>
        <p>HOME SERVICE</p>
        <p>DATA TRANSFER 🎯</p>
        <h2>💵12000</h2>
        <a href="https://buy.stripe.com/test_bIY5ml6Kd7gHg9y4gl">
  <button>PURCHASE</button>
  </a>
      </div>
    </div>



{/* <a href="https://buy.stripe.com/test_bIY5ml6Kd7gHg9y4gl">
  <button>jump</button>
  </a> */}
</>
  );
};

export default Payment;
