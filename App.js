import React, { useState } from 'react';
import { validate } from 'bitcoin-address-validation';
import './btc-verifier.css';

const BitcoinAddressValidator = () => {
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(null);

  const handleInput = (e) => {
    setAddress(e.target.value);
  };

  const handleValidate = () => {
    setValidAddress(validate(address));
  };

  return (
    <div className="form-container">
      <h1 className="heading">Bitcoin Wallet Address Verifier</h1>
      <form>
        <input
          type="text"
          value={address}
          onChange={handleInput}
          className={validAddress ? 'valid' : 'invalid'}
          placeholder="Bitcoin Wallet Address"
        />
      </form>
      <div className="button-container">
        <button type="button" onClick={handleValidate}>
          Verify
        </button>
      </div>
      {validAddress !== null && (
        <p className={validAddress ? 'valid' : 'invalid'}>
          {validAddress ? 'Bitcoin address is valid!' : 'Bitcoin address is invalid!'}
        </p>
      )}
    </div>
  );
};

export default BitcoinAddressValidator;