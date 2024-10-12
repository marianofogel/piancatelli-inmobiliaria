export const formatPrice = (price) => {
  if (!price) return "";
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
