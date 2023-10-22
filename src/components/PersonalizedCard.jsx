import React from 'react';
import rome from '../assets/images/rome.jpg';

const PersonalizedCard = ({ offer }) => {
  return (
    <div
      key={offer.id}
      className="flex border-2 rounded-lg mt-10"
      style={{ height: '250px', width: '950px', borderColor: 'lightblue' }}>
      <div
        className="flex rounded-lg items-end text-bottom justify-left"
        style={{ backgroundImage: `url(${offer?.imageUrl})`, width: 'inherit' }}>
        <h2
          style={{
            color: 'white',
            textShadow: '10px',
            fontWeight: 'bold',
            fontSize: '24px',
            width: 'fit-content',
            alignSelf: 'center'
          }}
          className="font-bold font-mono text-xxl rounded-sm">
          {offer.description}
        </h2>
      </div>
    </div>
  );
};

export default PersonalizedCard;
