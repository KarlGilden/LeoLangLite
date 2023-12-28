import { Translation } from '../types/GoogleTranslateAPI'

interface IProps {
    original: string
    translated: string
    loading: boolean
    addWord: (word:Translation) => void
    setTranslated: (phrase:string)=>void
}

const Dictionary = ({original, translated, addWord, setTranslated}:IProps) => {
  return (
    <div id='dictionary' className="fixed bottom-0 right-0 left-0 p-5">
        <div className=''>
          <p className=''>{original ? original : "Select a phrase to start"}</p>
          <p className='p-1'></p>
          <div className='flex'>
            <input 
              className='border-black border-[1px] rounded-[3px] px-2'
              type='text' 
              value={translated} 
              onChange={(e)=>{
                setTranslated(e.target.value);
              }} />

            <button className='p-2' onClick={()=>{addWord({original: original, translation: translated})}}>
              Save
            </button>
          </div>

        </div>
    </div>
  )
}

export default Dictionary