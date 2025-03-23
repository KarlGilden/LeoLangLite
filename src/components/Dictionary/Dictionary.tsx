import { DictionaryEntry } from '../../types/TranslationTypes'
import BtnDictionary from '../buttons/BtnDictionary'
import { FaPlus, FaTrash, FaSyncAlt } from "react-icons/fa";
import DictionaryTranslations from '../DictionaryTranslations';
import { ChangeEvent } from 'react';
import { TbLayoutBottombarCollapseFilled, TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';
import DictionaryButtonsContainer from './DictionaryButtonsContainer';

interface IProps {
    currentPhrase: DictionaryEntry
    phraseList: DictionaryEntry[]
    currentTranslations: DictionaryEntry
    setPhraseList: (phrase:DictionaryEntry[]) => void
    setCurrentPhrase: (translations:DictionaryEntry)=>void,
    isDocked: boolean,
    setIsDocked: (isDocked:boolean)=>void
}

const Dictionary = ({isDocked, setIsDocked, currentPhrase, phraseList, currentTranslations, setCurrentPhrase, setPhraseList}:IProps) => {
  
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
    let index = -1;

    if(typeof phrase !== 'string'){
        phrase = phrase.original;
    }

    for(let i=0;i<phraseList.length;i++){
        if(phraseList[i].original === phrase){
            index = i;
            break;
        }
    }

    return index;
  };

  const onTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPhrase({original:currentPhrase.original, translations:[e.target.value]});
  }

  return (
    <div id='dictionary' className={`${isDocked ? "sticky top-0 max-w-[400px] ml-5" : "max-w-[600px]"} absolute margin-x-auto w-full bottom-2 py-5 px-5 rounded-[1rem] bg-highlight flex flex-col justify-between`}>
        <div className='w-full'>
      
          <div className='flex flex-col w-full items-start'>
            <div className='w-full'>
              <textarea
                  id='dictionary-input'
                  rows={2}
                  className='border-black py-1 px-3 border-[1px] rounded-[3px] w-full resize-none'
                  value={currentPhrase.translations[0]} 
                  onChange={onTextAreaChange} />

              <DictionaryButtonsContainer>
                    <BtnDictionary 
                      visible={
                        currentPhrase.original.length >= 1 
                        && indexOfPhrase(currentPhrase) === -1 }
                      action={()=>addPhraseToList(currentPhrase)}
                    >
                      <FaPlus className="text-green text-xl"/>
                    </BtnDictionary>
                    <BtnDictionary 
                      visible={
                        currentPhrase.original.length >= 1 
                        && indexOfPhrase(currentPhrase) >= 0} 
                      action={()=>updatePhraseInList(currentPhrase)} 
                      >
                      <FaSyncAlt className="text-orange text-xl"/>
                    </BtnDictionary>
                    <BtnDictionary 
                      visible={
                        currentPhrase.original.length >= 1 
                        && indexOfPhrase(currentPhrase) >= 0} 
                      action={()=>removePhraseFromList(currentPhrase)} 
                      >
                      <FaTrash className="text-red text-xl"/>
                    </BtnDictionary>                
              </DictionaryButtonsContainer>
            </div>

            <p className="p-1"></p>
            <DictionaryTranslations currentTranslations={currentTranslations} currentPhrase={currentPhrase} setCurrentPhrase={setCurrentPhrase}/>
          </div>

          <p className='font-bold text-xl'>
            {currentTranslations.original ? currentTranslations.original : "Select a phrase to start"}
          </p>
        </div>
        <button className="py-1 text-sm flex items-center font-semibold " onClick={()=>{window.innerWidth > 725 ? setIsDocked(!isDocked) : ()=>{}}}>
            {isDocked ? 
                <TbLayoutBottombarCollapseFilled className={"mr-1 text-3xl"}/>
                :
                <TbLayoutSidebarRightCollapseFilled className={"mr-1 text-3xl"}/>
            }
        </button>
    </div>
  )
}

export default Dictionary