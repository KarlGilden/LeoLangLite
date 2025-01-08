import { DictionaryEntry } from '../types/TranslationTypes'
import BtnDictionary from './buttons/BtnDictionary'
import { FaPlus, FaTrash, FaSyncAlt } from "react-icons/fa";
import DictionaryTranslations from './DictionaryTranslations';
import { ChangeEvent, useEffect, useRef } from 'react';

interface IProps {
    currentPhrase: DictionaryEntry
    phraseList: DictionaryEntry[]
    currentTranslations: DictionaryEntry
    setPhraseList: (phrase:DictionaryEntry[]) => void
    setCurrentPhrase: (translations:DictionaryEntry)=>void
}

const Dictionary = ({currentPhrase, phraseList, currentTranslations, setCurrentPhrase, setPhraseList}:IProps) => {
  
  const addPhraseToList = (translation:DictionaryEntry) => {
    if(translation.translations[0] === "") return;

    if(translation.original && translation.translations.length > 0){
        setPhraseList([...phraseList, translation]);
    }
  };

  const updatePhraseInList = (phrase:DictionaryEntry) => {
    if(!phrase.original || !phrase.translations) return; 

    const index = indexOfPhrase(phrase);

    const tempPhraseList = phraseList.map((p, i) => {
        if (i === index) {
            return {original: phrase.original, translations: phrase.translations};
        } else {
            return p;
        }
        });

    setPhraseList(tempPhraseList);
    
  };

  const removePhraseFromList = (translation:DictionaryEntry) => {
      if(translation.original && translation.translations.length > 0){
          setPhraseList(phraseList.filter(p => p.original !== translation.original));
      }
  };

  const indexOfPhrase = (phrase:string | DictionaryEntry) => {
    if(typeof phrase !== 'string'){
        phrase = phrase.original;
    }
    let index = -1;
    for(let i=0;i<phraseList.length;i++){
        if(phraseList[i]. original === phrase){
            index = i;
            break;
        }
    }
    return index;
  };

  // const resizeTextArea = () => {

  //   if (!textAreaRef.current) {
  //     return;
  //   }

  //   textAreaRef.current.style.height = "auto"; // will not work without this!
  //   textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  // };

  const onTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPhrase({original:currentPhrase.original, translations:[e.target.value]});
  }

  return (
    <div id='dictionary' className="fixed h-full max-h-[150px] bottom-0 right-0 left-0 py-5 px-5 bg-white shadow-container flex justify-center">
        <div className='max-w-[600px] w-full'>
        
          <div className='flex flex-col w-full items-start'>
            <div className='flex w-full'>
              <textarea
                  id='dictionary-input'
                  rows={2}
                  className='border-black py-1 px-3 border-[1px] rounded-[3px] w-full resize-none'
                  value={currentPhrase.translations[0]} 
                  onChange={onTextAreaChange} />

                  <p className='p-1'></p>

                  <div className='flex'>
                    {indexOfPhrase(currentPhrase) === -1 ? 
                        <BtnDictionary action={addPhraseToList} input={currentPhrase}>
                          <FaPlus className="text-green text-xl"/>
                        </BtnDictionary>
                      :
                      <>
                        <BtnDictionary action={updatePhraseInList} input={currentPhrase}>
                          <FaSyncAlt className="text-orange text-xl"/>
                        </BtnDictionary>
                        <BtnDictionary action={removePhraseFromList} input={currentPhrase}>
                          <FaTrash className="text-red text-xl"/>
                        </BtnDictionary>
                      </>
                    }
                    
                  </div>
            </div>

            <p className="p-1"></p>
            <DictionaryTranslations currentTranslations={currentTranslations} currentPhrase={currentPhrase} setCurrentPhrase={setCurrentPhrase}/>
          </div>

          <p className='font-bold text-xl'>
            {currentTranslations.original ? currentTranslations.original : "Select a phrase to start"}
          </p>
        </div>
    </div>
  )
}

export default Dictionary