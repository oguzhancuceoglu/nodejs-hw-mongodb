const parseNumber = (number, defaultValue) => {
  if (typeof number !== 'string') return defaultValue;
  const parsedNumber = parseInt(number, 10);
  if (Number.isNaN(parsedNumber)) return defaultValue;
  return parsedNumber;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage > 0 ? parsedPage : 1,
    perPage: parsedPerPage > 0 ? parsedPerPage : 10,
  };
};