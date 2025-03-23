import { DictionaryEntry, GoogleTranslateResult } from "../types/TranslationTypes";
import dictionary from '../data/dictionary.json';

async function getGoogleTranslation(word:string){
  let response;

  if(typeof word !== "string") return Promise.reject("Error occured");

  let url = `https://translation.googleapis.com/language/translate/v2?`;
  url += `&key=${import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY}`;
  url += `&q=${encodeURI(word)}`;
  url += `&source=mi`;
  url += `&target=${"en"}`;
  url += `&format=text`;

  try{
    response = await fetch(url, { 
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    response = await response.json();
    
    if(!response) return null;

    return Promise.resolve(_mapGoogleToDictionary(word, response));

  }catch(e){
    console.log("There was an error with the translation request: ", e);
    return Promise.resolve(null);
  }
};

function getDictionaryTranslation(phrase:string){
    for(let i=0;i<dictionary.length;i++){
      if(dictionary[i].original === phrase){
        return Promise.resolve(dictionary[i] as DictionaryEntry);
      }
    }
    return Promise.resolve(null);
};

export const translate = async (phrase:string, phraseList:DictionaryEntry[]) => {
      let translation: DictionaryEntry | null;

      translation = await _getSavedPhraseTranslation(phrase, phraseList)
      if(translation) return Promise.resolve(translation);

      translation = await getDictionaryTranslation(phrase);
      if(translation) return Promise.resolve(translation);

      translation = await getGoogleTranslation(phrase);
      if(translation) return Promise.resolve(translation);

      return Promise.reject();
};

const _getSavedPhraseTranslation = (phrase:string, phraseList:DictionaryEntry[]) => {
  for(let i=0;i<phraseList.length;i++){
    if(phraseList[i].original === phrase){
        return Promise.resolve(phraseList[i]);
    }
  }

  return null;
};

const _mapGoogleToDictionary = (phrase:string, googleResult:GoogleTranslateResult) => {
  const returnTranslations = googleResult.data.translations.map((value)=>{
    return value.translatedText;
  });

  const returnObject: DictionaryEntry = {
    original:phrase, 
    translations: returnTranslations
  };

  return returnObject;
};