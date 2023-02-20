import React from 'react';
import style from '../../pages/Auth/auth.module.css';

const InputAuth = (props) => {
  return (
    <div className="mb-3 form-group">
      <label style={{ color: '#696f79' }} className="formLabel">
        {props.Label}
      </label>
      <input type={props.TypeInput} placeholder={props.PlaceHolder} value={props.Value} onChange={props.OnChange} className={`${style.input} form-control mt-2`} id="" aria-describedby="" />
    </div>
  );
};

export default InputAuth;
