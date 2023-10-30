const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

export const convert = (n: number) =>
  Array.from({ length: 4 })
    .map((_, i) => {
      const num = getNthDigit(n, i);
      return encodeDecimal(
        num,
        romanNumerals[i * 2],
        romanNumerals[i * 2 + 1],
        romanNumerals[i * 2 + 2]
      );
    })
    .filter(Boolean)
    .reverse()
    .join("");

const encodeDecimal = (
  n: number,
  lowChar: string,
  midChar: string,
  upChar: string
) => {
  if (n < 4) return repeatNString(n, lowChar);
  if (n === 4) return lowChar + midChar;
  if (n === 5) return midChar;
  if (n < 9) return midChar + repeatNString(n - 5, lowChar);

  return lowChar + upChar;
};

const repeatNString = (n: number, str: string) => {
  return Array.from({ length: n }).fill(str).join("");
};

const getNthDigit = (n: number, digit: number) => {
  return Math.floor(n / Math.pow(10, digit)) % 10;
};

// const convertV1 = (n: number) => {
//   let res = "";

//   const firstPlaceNum = n % 10;
//   const secondPlaceNum = Math.floor(n / 10) % 10;
//   const thirdPlaceNum = Math.floor(n / 100) % 10;
//   const fourthPlaceNum = Math.floor(n / 1000) % 10;

//   if (firstPlaceNum) {
//     res += encode(firstPlaceNum, "I", "V", "X");
//   }

//   if (secondPlaceNum) {
//     res = encode(secondPlaceNum, "X", "L", "C") + res;
//   }

//   if (thirdPlaceNum) {
//     res = encode(thirdPlaceNum, "C", "D", "M") + res;
//   }

//   if (fourthPlaceNum) {
//     res = encode(fourthPlaceNum, "M", "", "") + res;
//   }

//   return res;
// };
