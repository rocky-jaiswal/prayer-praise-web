const cleanString = (str?: string): string => {
  if (!str) {
    return '';
  }
  return str.trim()
    .replace(/<[^>]*>/ig, ' ')
    .replace(/&nbsp;?/g, ' ');
};

export default cleanString;
