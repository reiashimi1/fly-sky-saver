import React from 'react';

const Tag = ({ content, ...props }) => (
  <div {...props}>
    <div className="group">
      <button className="flex news-data items-center justify-center rounded-full border-0.5 px-4 h-8 cursor-default">
        <span className="text-center text-white whitespace-nowrap text-xxs md:text-sm uppercase font-montserrat font-semibold">
          {content}
        </span>
      </button>
    </div>
  </div>
);

const Card = ({
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
      style={{ width: '300px', height: '400px' }}
      className={`flex border-0.5 rounded-lg cursor-pointer group bg-brand-dark-blue transition duration-500 ease-in-out `}>
      <div
        className={`flex flex-col relative hover:transform overflow-hidden p-2 ${
          newsType ? 'hover:bg-white' : 'hover:translate-x-4'
        }`}
        style={{ border: '2px solid white', borderRadius: '5px' }}>
        <div className="flex absolute top-0 space-x-3 m-1" style={{ zIndex: 2 }}>
          <Tag content={'DD MMMM YYYY'} />
          <Tag content={'Blog'} />
        </div>
        {imageSrc && (
          <div className="flex justify-center h-2/3">
            <img className="news-image object-cover rounded-lg" src={imageSrc} alt="" />
          </div>
        )}
        <div className={`flex flex-col md:flex-1 ${imageSrc ? 'mt-2' : 'mt-15'} mx-2`}>
          <div
            className={`flex flex-1 text-white text-lg pb-1 font-bold ${
              newsType && 'group-hover:text-black'
            } line-clamp-2`}>
            {title}
          </div>
          <div
            className={`font-montserrat text-white text-xs text-opacity-50 ${
              newsType && 'group-hover:text-gray-600'
            } text-justify pb-5 leading-5 line-clamp-3`}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
