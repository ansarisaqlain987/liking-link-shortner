// write a function to create a random string between given range limits
export const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// write a function to create a random number between given range limits
export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function to create a hash of the string
export const generateHash = (str: string) => {
  let hash = 0;
  let i;
  for (i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

export const generateKey = () => {
  //   const len = generateRandomNumber(1, 100);
  const key = generateRandomString(15);

  return key;
};
