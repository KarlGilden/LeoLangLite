import { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DictionaryEntry } from '../types/TranslationTypes';

interface IProps{
    currentTranslations: DictionaryEntry
    currentPhrase: DictionaryEntry
    setCurrentPhrase: (phrase:DictionaryEntry)=>void
}

const DictionaryTranslations = ({currentTranslations, currentPhrase}:IProps) => {

    const [showTranslations, setShowTranslations] = useState(false);

    useEffect(()=>{
      setShowTranslations(false);
    },[currentPhrase]);

    const toggleTranslationList = () => {
      setShowTranslations(!showTranslations);
    };
    
  return (
    <div className={`${currentTranslations.translations.length > 1 ? "": "hidden"}`}>

      <div className='flex items-center cursor-pointer' onClick={()=>toggleTranslationList()}>
        <small>See all translations ({currentTranslations.translations.length})</small>
        <p className='p-1'></p>
        {showTranslations ? <FaAngleUp/>:<FaAngleDown/>}
      </div>

      <div className={`${showTranslations ? '':'hidden'} transition ease-in-out delay-300`}>
          {currentTranslations.translations.map((value, index)=>{
              return <div key={index} className={`py-1 flex`}>{value}</div>
          })}
      </div>

    </div>
  )
}

export default DictionaryTranslations