import rome from '../assets/images/rome.jpg';
import PrimaryButton from '../core/PrimaryButton';

const OfferAnnouncements = () => {
  return (
    <div
      className="flex border-2 rounded-lg mt-10"
      style={{ height: '250px', width: '650px', borderColor: 'lightblue' }}>
      <div
        className="flex rounded-lg flex-col justify-center align-center"
        style={{ backgroundImage: `url(${rome})`, width: 'inherit ' }}>
        <h2
          style={{ background: 'white', color: 'brown', width: 'fit-content', alignSelf: 'center' }}
          className="font-bold font-mono text-xxl rounded-sm">
          Travel to rome today for only $40!
        </h2>
      </div>
    </div>
  );
};

export default OfferAnnouncements;
