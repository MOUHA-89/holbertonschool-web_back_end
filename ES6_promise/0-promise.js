import { resolve } from "path";

export default function getResponseFromAPI() {
  return promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("operation successful");
    }
    else {
      reject("operation failled");
    }
  });
}
