export const calculatePaginationData = (count, page, perPage) => {
  const totalPage = Math.ceil(count / perPage);
  const hasNextPage = Boolean(page < totalPage);
  const hasPreviousPage = page > 1;

  return {
    page,
    perPage,
    totalPage,
    hasNextPage,
    hasPreviousPage,
    totalItems: count,
  };
};
