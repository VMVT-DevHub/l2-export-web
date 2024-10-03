import { format } from 'date-fns';

export const simpleDate = (value: string | Date) => {
  return format(new Date(value), 'yyyy-MM-dd');
};
