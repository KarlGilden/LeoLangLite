import { useState } from 'react'
import { DictionaryEntry } from '../types/TranslationTypes';
import PhraseListDialog from './PhraseListDialog';

interface IProps {
    phraseList: DictionaryEntry[],
}

const ReaderHeader = ({phraseList}:IProps) => {
    const [phraseListOpen, setPhraseListOpen] = useState(false);

    const showPhraseList = () => {
        if(phraseList.length > 0){
            setPhraseListOpen(true);
        }
    }
  return (
    <div className="flex w-full max-w-[600px] py-4">
        <button className="py-1 px-4 text-sm rounded-full bg-[#000] text-[#fff]" onClick={()=>{showPhraseList()}}>Saved <span className="font-semibold ml-2">{phraseList.length}</span></button>
        <PhraseListDialog open={phraseListOpen} setOpen={setPhraseListOpen} phraseList={phraseList}/>
    </div>
  )
}

export default ReaderHeader