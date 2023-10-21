const CarouselCards = ({
  key,
  type = 'news',
  imageSrc,
  id,
  date,
  title,
  description,
  onClick,
  newsType = true
}) => {
  return (
    <div
      id={id}
      key={key}
      onClick={onClick}
      style={{ width: '150px', height: '150px' }}
      className={`flex border-sky-900 shadow-lg rounded-lg cursor-pointer group transition duration-500 ease-in-out `}>
      <div
        className={`flex flex-col hover:transform overflow-hidden py-2 px-6 ${
          newsType ? '' : 'hover:translate-x-4'
        }`}
        style={{ border: '1px solid #df72df', borderRadius: '5px' }}>
        {imageSrc && (
          <div className="flex h-2/5">
            <img className="news-image object-contain rounded-lg" src={imageSrc} alt="" />
          </div>
        )}
        <div
          className={`flex mt-2 text-lg font-bold text-blue-900 ${
            newsType && 'group-hover:text-black'
          } line-clamp-2`}>
          {title}
        </div>
        <div className={`flex flex-col  ${imageSrc ? 'mt-2' : 'mt-1'}`}>
          <div
            className={`font-montserrat  text-xs text-opacity-50 ${
              newsType && 'group-hover:text-gray-600'
            } text-justify leading-5 line-clamp-3`}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselCards;
