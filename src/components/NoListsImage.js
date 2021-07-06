import React from 'react';
import img from '../img/empty.svg';

const NoListImage = () => {
  return (
    <div >
      <div className="text">No lists to show</div>
      <img src={img} className="img-md" alt="" />
    </div>
  );
};

export default NoListImage;
