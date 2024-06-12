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
    default:
      return null;
  }
};

export default Icon;
