import { Translation } from '../types/GoogleTranslateAPI'
import BtnDictionary from './buttons/BtnDictionary'

interface IProps {
    original: string
    translated: string
    loading: boolean
    phraseIsSaved: boolean
    addPhrase: (word:Translation) => void
    updatePhrase: (word:Translation) => void
    removePhrase: (word:Translation) => void
    setTranslated: (phrase:string)=>void
}

const Dictionary = ({original, translated, phraseIsSaved, addPhrase, updatePhrase, removePhrase, setTranslated}:IProps) => {
  
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
                value={translated} 
                onChange={(e)=>{
                  setTranslated(e.target.value);
                }} />
                <p className='p-2'></p>
                <a target='_blank' href={dictionaryBaseUrl + `/search?keywords=${original}`}>Search Te Aka</a>
          </div>
          <div>
            {!phraseIsSaved ? 
                <BtnDictionary action={addPhrase} input={{original: original, translation: translated}}>
                  Save
                </BtnDictionary>
              :
              <>
                <BtnDictionary action={updatePhrase} input={{original: original, translation: translated}}>
                  Update
                </BtnDictionary>
                <BtnDictionary action={removePhrase} input={{original: original, translation: translated}}>
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