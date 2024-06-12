import { format } from 'date-fns';

export const simpleDate = (value: string) => {
  return format(new Date(value), 'yyyy-MM-dd');
};
