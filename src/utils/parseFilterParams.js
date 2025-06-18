const parseType = (contactType) => {
  const allowedTypes = ['home', 'work', 'personal'];
  return allowedTypes.includes(contactType) ? contactType : undefined;
};

const parseIsFavorite = (isFavorite) => {
  if (isFavorite === 'true') return true;
  if (isFavorite === 'false') return false;
};

export const parsedFilterParams = (query) => {
  const { contactType, isFavorite } = query;

  const parsedContactType = parseType(contactType);
  const parsedIsFavorite = parseIsFavorite(isFavorite);

  return {
    type: parsedContactType,
    isFavorite: parsedIsFavorite,
  };
};
