const toCapitalizeFirstLetter = (str?: string): string => (str ? str[0].toUpperCase() + str.slice(1) : '');

export default toCapitalizeFirstLetter;
