export const filterAndSort = (properties, filters, sortKey) => {
  const filteredProperties = properties.filter((property) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      if (key === "rooms" && filters[key] === 4) {
        return property[key] > 4;
      }
      if (key === "minPrice") {
        const propertyPrice = parseFloat(
          property["price"].replace(/[^0-9.-]+/g, "")
        );
        const minPrice = parseFloat(filters[key].replace(/[^0-9.-]+/g, ""));
        return propertyPrice >= minPrice;
      }
      if (key === "maxPrice") {
        const propertyPrice = parseFloat(
          property["price"].replace(/[^0-9.-]+/g, "")
        );
        const maxPrice = parseFloat(filters[key].replace(/[^0-9.-]+/g, ""));
        return propertyPrice <= maxPrice;
      }
      return property[key] === filters[key];
    });
  });

  if (sortKey.key) {
    filteredProperties.sort((a, b) => {
      const valueA =
        sortKey.key === "price"
          ? parseFloat(a["price"].replace(/[^0-9.-]+/g, ""))
          : a[sortKey.key];
      const valueB =
        sortKey.key === "price"
          ? parseFloat(b["price"].replace(/[^0-9.-]+/g, ""))
          : b[sortKey.key];
      if (valueA < valueB) return -1 * sortKey.order;
      if (valueA > valueB) return 1 * sortKey.order;
      return 0;
    });
  }

  return filteredProperties;
};
