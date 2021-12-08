import credentials from "../../credentials.json"

import CryptoJS from "crypto-js";

const ApiMedicHost = 'https://sandbox-healthservice.priaid.ch';
const AuthHost = 'https://sandbox-authservice.priaid.ch';
const password = credentials.password;
const user_id = credentials.user_id;

export const getToken = async () => {
  const computedHash = CryptoJS.HmacMD5(`${AuthHost}/login`, password);
  const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

  const res = await fetch(`${AuthHost}/login`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${user_id}:${computedHashString}`
        }
    });
    return await res.json();
};
