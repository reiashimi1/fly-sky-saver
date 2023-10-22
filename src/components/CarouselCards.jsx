const CarouselCards = ({
  key,
  type = 'flight',
  imageSrc,
  id,
  date,
  title,
  description,
  amount,
  onClick,
  source,
  destination
}) => {
  return (
    <div
      id={id}
      key={key}
      onClick={onClick}
      style={{ width: '250px', height: '300px' }}
      className={`flex shadow-lg rounded-lg cursor-pointer group transition duration-500 ease-in-out `}>
      <div
        className={`flex flex-col hover:transform overflow-hidden py-2 px-4 bg-indigo-50 rounded-xl`}>
        {imageSrc && (
          <div className="flex w-full">
            <img className="news-image object-contain rounded-lg" src={imageSrc} alt="" />
          </div>
        )}
        <div className={`flex mt-2 text-lg font-bold text-blue-900 group-hover:text-black`}>
          {title}
        </div>
        <div className={`flex flex-col  ${imageSrc ? 'mt-2' : 'mt-1'}`}>
          <div
            className={`font-montserrat text-xs text-opacity-50 group-hover:text-gray-600 text-justify leading-5 line-clamp-3`}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        {type === 'offer' && amount && (
          <div className="bottom-0 fixed py-2 text-indigo-600 text-right font-semibold">
            {amount * 100} % Discount
          </div>
        )}
        {type === 'flight' && source && destination && (
          <div className="bottom-0 fixed py-2 text-indigo-600 text-right font-semibold">
            {source} - {destination}
          </div>
        )}
      </div>
    </div>
  );
};
export default CarouselCards;
