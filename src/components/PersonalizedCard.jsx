import React from 'react';
import rome from '../assets/images/rome.jpg';

const PersonalizedCard = ({ offer }) => {
  return (
    <div
      key={offer.id}
      className="flex border-2 rounded-lg mt-10"
      style={{ height: '250px', width: '650px', borderColor: 'lightblue' }}>
      <div
        className="flex rounded-lg flex-col justify-center align-center"
        style={{ backgroundImage: `url(${offer?.imageUrl})`, width: 'inherit ' }}>
        <h2
          style={{
            background: 'white',
            color: 'brown',
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
