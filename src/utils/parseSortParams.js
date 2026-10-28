const parseSortOrder = (sortOrder) => {
  const isKnownOrder = ['asc', 'desc'].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return 'asc';
};

const parseSortBy = (sortBy) => {
  const keysList = ['_id', 'name', 'phoneNumber', 'email', 'isFavourite', 'contactType', 'createdAt', 'updatedAt'];
  if (keysList.includes(sortBy)) return sortBy;
  return 'name';
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};