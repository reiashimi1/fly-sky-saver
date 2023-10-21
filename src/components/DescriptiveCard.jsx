import descriptive from '../assets/images/descriptive.jpg';
const DescriptiveCard = () => {
  return (
    <div
      className="flex border-2 mx-auto rounded-lg mt-10"
      style={{ height: '400px', width: '1000px', borderColor: 'lightblue' }}>
      <img src={descriptive} className="object-cover rounded-lg h-full f" />
      <div
        className="flex flex-col justify-center align-center"
        style={{ background: '#c3eeff', border: '#46a1be' }}>
        <h2 style={{ color: '#0a2ca8' }} className="font-bold px-10 font-mono text-lg">
          From iconic landmarks to hidden gems, embark on a journey of discovery with our curated
          selection of featured destinations.{' '}
        </h2>
        <br />
        <br />
        <h3 style={{ fontStyle: 'italic' }} className="px-15 text-center ">
          ✈️ Try us, you might be lucky and win! ✨
        </h3>
      </div>
    </div>
  );
};
export default DescriptiveCard;
