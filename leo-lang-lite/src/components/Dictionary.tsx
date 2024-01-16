import { DictionaryEntry } from '../types/TranslationTypes'
import BtnDictionary from './buttons/BtnDictionary'

interface IProps {
    original: string
    currentPhrase: DictionaryEntry
    loading: boolean
    phraseIsSaved: boolean
    addPhrase: (word:DictionaryEntry) => void
    updatePhrase: (word:DictionaryEntry) => void
    removePhrase: (word:DictionaryEntry) => void
    setCurrentPhrase: (translations:DictionaryEntry)=>void
}

const Dictionary = ({original, currentPhrase, phraseIsSaved, addPhrase, updatePhrase, removePhrase, setCurrentPhrase}:IProps) => {
  
  const dictionaryBaseUrl = "https://www.maoridictionary.co.nz";

  return (
    <div id='dictionary' className="fixed bottom-0 right-0 left-0 py-2 px-5 bg-white shadow-container">
        <p className='font-bold text-xl'>{original ? original : "Select a phrase to start"}</p>
        
        <p className='p-1'></p>

        <div className='flex flex-col w-fit items-start'>
          <div className='flex'>
            <input 
                className='border-black border-[1px] rounded-[3px] px-1'
                type='text' 
                value={currentPhrase.translations[0]} 
                onChange={(e)=>{
                  setCurrentPhrase({original:original, translations:[e.target.value]});
                }} />
                <p className='p-2'></p>
                <a target='_blank' href={dictionaryBaseUrl + `/search?keywords=${original}`}>Search Te Aka</a>
          </div>

          <div>
            {!phraseIsSaved ? 
                <BtnDictionary action={addPhrase} input={currentPhrase}>
                  Save
                </BtnDictionary>
              :
              <>
                <BtnDictionary action={updatePhrase} input={currentPhrase}>
                  Update
                </BtnDictionary>
                <BtnDictionary action={removePhrase} input={currentPhrase}>
                  Delete
                </BtnDictionary>
              </>
            }
          </div>

        </div>
    </div>
  )
}

export default Dictionary