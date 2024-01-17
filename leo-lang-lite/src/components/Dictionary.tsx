import { DictionaryEntry } from '../types/TranslationTypes'
import BtnDictionary from './buttons/BtnDictionary'
import { GoTrash, GoPlusCircle, GoSync } from "react-icons/go";
interface IProps {
    currentPhrase: DictionaryEntry
    phraseIsSaved: boolean
    addPhrase: (word:DictionaryEntry) => void
    updatePhrase: (word:DictionaryEntry) => void
    removePhrase: (word:DictionaryEntry) => void
    setCurrentPhrase: (translations:DictionaryEntry)=>void
}

const Dictionary = ({currentPhrase, phraseIsSaved, addPhrase, updatePhrase, removePhrase, setCurrentPhrase}:IProps) => {

  const dictionaryBaseUrl = "https://www.maoridictionary.co.nz";

  return (
    <div id='dictionary' className="fixed bottom-0 right-0 left-0 py-2 px-5 bg-white shadow-container">
        <p className='font-bold text-xl'>{currentPhrase.original ? currentPhrase.original : "Select a phrase to start"}</p>
        
        <p className='p-1'></p>

        <div className='flex flex-col w-fit items-start'>
          <div className='flex'>
            <input 
                className='border-black px-2 border-[1px] rounded-[3px] w-full'
                type='text' 
                value={currentPhrase.translations[0]} 
                onChange={(e)=>{
                  setCurrentPhrase({original:currentPhrase.original, translations:[e.target.value]});
                }} />
                <p className='p-1'></p>
                <div className='flex'>
                  {!phraseIsSaved ? 
                      <BtnDictionary action={addPhrase} input={currentPhrase}>
                        <GoPlusCircle className="text-green text-2xl"/>
                      </BtnDictionary>
                    :
                    <>
                      <BtnDictionary action={updatePhrase} input={currentPhrase}>
                        <GoSync className="text-orange text-2xl"/>
                      </BtnDictionary>
                      <BtnDictionary action={removePhrase} input={currentPhrase}>
                        <GoTrash className="text-red text-2xl"/>
                      </BtnDictionary>
                    </>
                  }
                </div>
          </div>

          <a target='_blank' href={dictionaryBaseUrl + `/search?keywords=${currentPhrase.original}`}>Search Te Aka</a>


        </div>
    </div>
  )
}

export default Dictionary