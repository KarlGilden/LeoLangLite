import { TranslationResult } from "../types/GoogleTranslateAPI";

export function translate(word:string, iso:string){

    return new Promise<TranslationResult>((resolve, reject) => {
        if(typeof word !== "string" || typeof iso !== "string") return "Error occured";

        console.log(import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY);
        let url = `https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY}`;
        url += '&q=' + encodeURI(word);
        url += `&source=${iso}`;
        url += `&target=${"en"}`;
        url += `&format=text`
    
        fetch(url, { 
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(res => res.json())
        .then((response) => {
            return resolve(response);
        })
        .catch(error => {
          console.log("There was an error with the translation request: ", error);
          return reject(error);
        });
    })
}