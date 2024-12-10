import { IconBaseProps } from 'react-icons';

import { BiMap } from 'react-icons/bi';

import { HiOutlineTruck } from 'react-icons/hi';
import { IoIosAttach } from 'react-icons/io';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import { MdArrowBack } from 'react-icons/md';
import { IconName } from '../../utils/constants';
export interface IconProps extends IconBaseProps {
  name: IconName;
  className?: string;
  fun?: () => void;
}

const Icon = ({ name, className, fun, ...rest }: IconProps) => {
  switch (name) {
    case IconName.placeMark:
      return <BiMap className={className} {...rest} />;
    case IconName.truck:
      return <HiOutlineTruck className={className} {...rest} />;
    case IconName.attachment:
      return <IoIosAttach className={className} {...rest} />;
    case IconName.backArrow:
      return <MdArrowBack className={className} {...rest} />;
    case IconName.backward:
      return <IoChevronBack className={className} {...rest} />;
    case IconName.forward:
      return <IoChevronForward className={className} {...rest} />;
      case IconName.continue:
      return (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5 12H19" 
              stroke="#192F4E" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
            <path 
              d="M12 5L19 12L12 19" 
              stroke="#192F4E" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
        </svg>
      );
    case IconName.continueLight:
    return (
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M5 12H19" 
            stroke="#ffffff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
          <path 
            d="M12 5L19 12L12 19" 
            stroke="#ffffff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
      </svg>
    );
    case IconName.sertificateCheck:
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.1667 36.6667H30C30.884 36.6667 31.7319 36.3155 32.357 35.6904C32.9821 35.0652 33.3333 34.2174 33.3333 33.3333V11.6667L25 3.33333H9.99999C9.11593 3.33333 8.26809 3.68452 7.64297 4.30964C7.01785 4.93477 6.66666 5.78261 6.66666 6.66667V13.3333"
          stroke="#FCE28D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.3333 3.33333V10C23.3333 10.8841 23.6845 11.7319 24.3097 12.357C24.9348 12.9821 25.7826 13.3333 26.6667 13.3333H33.3333"
          stroke="#FCE28D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 21.8333C4.48637 22.1298 4.06113 22.5579 3.76816 23.0736C3.47518 23.5892 3.32508 24.1737 3.33333 24.7667V30.1667C3.31403 30.7604 3.45373 31.3484 3.73796 31.87C4.02219 32.3916 4.44064 32.8277 4.95 33.1333L10 36.1667C10.5111 36.4711 11.0945 36.6332 11.6894 36.6362C12.2843 36.6391 12.8692 36.4827 13.3833 36.1833L18.3333 33.1667C18.847 32.8702 19.2722 32.4421 19.5652 31.9264C19.8582 31.4108 20.0083 30.8263 20 30.2333V24.8333C20.0193 24.2396 19.8796 23.6516 19.5954 23.13C19.3111 22.6084 18.8927 22.1723 18.3833 21.8667L13.3333 18.8333C12.8222 18.5289 12.2389 18.3668 11.6439 18.3638C11.049 18.3609 10.4641 18.5173 9.95 18.8167L5 21.8333Z"
          stroke="#FCE28D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 28.3333V36.6667"
          stroke="#FCE28D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 23.6667L11.6667 28.3333L3.83334 23.6667"
          stroke="#FCE28D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
    case IconName.sertificateInquiry:
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 36.6667H30C30.8841 36.6667 31.7319 36.3155 32.357 35.6904C32.9821 35.0652 33.3333 34.2174 33.3333 33.3333V11.6667L25 3.33333H10C9.11594 3.33333 8.2681 3.68452 7.64298 4.30964C7.01786 4.93477 6.66667 5.78261 6.66667 6.66667V13.3333"
          stroke="#192F4E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.3333 3.33333V10C23.3333 10.8841 23.6845 11.7319 24.3096 12.357C24.9348 12.9821 25.7826 13.3333 26.6667 13.3333H33.3333"
          stroke="#192F4E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 25L8.33333 28.3333L15 21.6667"
          stroke="#192F4E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
    default:
      return null;
  }
};

export default Icon;
