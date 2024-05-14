// FIREBASE
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase/config/clientApp";

export const returnImagesFromPaths = (
  paths: string[],
  setState: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const promises = paths.map((path) => {
    return getDownloadURL(ref(storage, path))
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
        return "";
      });
  });

  Promise.all(promises)
    .then((urls) => {
      console.log(urls);
      setState(urls);
    })
    .catch((error) => {
      console.log("Error fetching URLs:", error);
    });
};
