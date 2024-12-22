import moment from 'jalali-moment';

export const formatDate = (date: Date): string => {
  return moment(date).locale('fa').format('DD MMMM YYYY');
};

export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const start = moment(startDate).locale('fa').format('DD MMMM YYYY');
  const end = moment(endDate).locale('fa').format('DD MMMM YYYY');
  return `${start} - ${end}`;
};

export const calculateNights = (startDate: Date, endDate: Date): number => {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, 'days');
};

export const addDays = (date: Date, days: number): Date => {
  return moment(date).add(days, 'days').toDate();
};

export const today = (): Date => {
  return moment().startOf('day').toDate();
};

export const tomorrow = (): Date => {
  return moment().add(1, 'days').startOf('day').toDate();
};