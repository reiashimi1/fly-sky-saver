import { useLocation } from 'react-router-dom';

const useActiveMenuItem = (link, exact = false, children = []) => {
  const location = useLocation();
  const currentLocation = location?.pathname;
  let isActive = exact ? currentLocation === link : currentLocation?.startsWith(link);
  children.forEach((child) => {
    const childLink = child.props?.link;
    if (currentLocation.startsWith(childLink)) {
      isActive = true;
    }
  });

  return isActive;
};

export default useActiveMenuItem;
