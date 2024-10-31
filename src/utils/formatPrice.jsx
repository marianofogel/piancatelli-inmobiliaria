export const formatPrice = (price) => {
  if (!price) return "";
  if (
    typeof price === "object" &&
    price.currency &&
    price.price !== undefined
  ) {
    const formattedPrice = price.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${price.currency === 'USD' ? 'USD' : '$'} ${formattedPrice}`;
  }
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
