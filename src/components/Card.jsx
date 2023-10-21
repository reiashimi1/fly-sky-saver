import React from 'react';
import { dateFormatter } from '@utils/helpers';
import { useTranslation } from 'react-i18next';

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

const Card = ({ key, type, imageSrc, id, date, title, description, onClick, newsType = true }) => {
  const { t } = useTranslation();

  return (
    <div
      id={id}
      key={key}
      onClick={onClick}
      className={`gallery-news flex border-0.5 lg:w-11/12 xl:w-2/3 rounded-lg border-white m-3 p-4 cursor-pointer group bg-brand-dark-blue ${
        newsType ? 'lg:hover:bg-white' : 'lg:hover:translate-x-4'
      } transition duration-500 ease-in-out lg:transform mx-5`}>
      <div className="flex flex-col relative overflow-hidden">
        <div className="flex absolute top-0 space-x-3 m-1" style={{ zIndex: 2 }}>
          <Tag content={dateFormatter(date, 'DD MMMM YYYY')} />
          <Tag content={type === 'news' ? t('blog') : t('career')} />
        </div>
        {imageSrc && (
          <div className="flex flex-1 justify-center">
            <img
              className="news-image object-cover rounded-lg"
              src={imageSrc?.data?.attributes?.url}
              alt=""
            />
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
