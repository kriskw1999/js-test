export const getLowestPrice = (priceHistory) => {
  const activePromotionID =
    priceHistory.length > 0
      ? priceHistory[priceHistory.length - 1].appliedPromoId
      : "";
  const currentPrice =
    priceHistory.length > 0 ? priceHistory[priceHistory.length - 1].price : 0;

  const result = priceHistory
    .filter((entry) => {
      if (!entry.appliedPromoId) return true;
      if (entry.appliedPromoId != activePromotionID) return true;
      return (
        entry.appliedPromoId == activePromotionID && entry.price != currentPrice
      );
    })
    .map((line) => line.price)
    .sort((a, b) => a - b);

  return result.length > 0 ? result[0] : 0;
};

export default getLowestPrice;
