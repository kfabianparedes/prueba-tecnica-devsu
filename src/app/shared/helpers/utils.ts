
export const formatDateString = (date: string) => {
  return date ? new Date(date).toISOString().split('T')[0] : '';
}