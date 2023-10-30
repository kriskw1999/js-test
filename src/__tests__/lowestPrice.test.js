import { getLowestPrice } from "../lowestPrice";
import { test, expect, it, describe } from "@jest/globals";

describe("getLowestPrice", () => {
  it("should return the lowest price from the price history, not considering the last promotion applied with the same price", () => {
    const priceHistory = [
      { appliedPromoId: "promo1", price: 100 },
      { appliedPromoId: "promo2", price: 200 },
      { appliedPromoId: "promo1", price: 150 },
      { appliedPromoId: "promo1", price: 150 },
    ];
    expect(getLowestPrice(priceHistory)).toBe(100);
  });

  it("should return 0 if the price history is empty", () => {
    const priceHistory = [];
    expect(getLowestPrice(priceHistory)).toBe(0);
  });

  it("should return the current price if there are no other prices", () => {
    const priceHistory = [{ appliedPromoId: "", price: 100 }];
    expect(getLowestPrice(priceHistory)).toBe(100);
  });

  it("should return the lowest price if the current price is not the lowest", () => {
    const priceHistory = [
      { appliedPromoId: "promo1", price: 100 },
      { appliedPromoId: "promo2", price: 200 },
      { appliedPromoId: "promo1", price: 150 },
      { appliedPromoId: "", price: 250 },
    ];
    expect(getLowestPrice(priceHistory)).toBe(100);
  });

  it("should return the current price if it is the lowest", () => {
    const priceHistory = [
      { appliedPromoId: "promo1", price: 100 },
      { appliedPromoId: "promo2", price: 200 },
      { appliedPromoId: "promo1", price: 150 },
      { appliedPromoId: "", price: 50 },
    ];
    expect(getLowestPrice(priceHistory)).toBe(50);
  });

  it("should return 0 if there is only the same promo applied without changing of price in the record", () => {
    const priceHistory = [
      { appliedPromoId: "promo1", price: 100 },
      { appliedPromoId: "promo1", price: 100 },
      { appliedPromoId: "promo1", price: 100 },
    ];
    expect(getLowestPrice(priceHistory)).toBe(0);
  });
});
