import { useState } from 'react'
import { DictionaryEntry } from '../types/TranslationTypes';
import PhraseListDialog from './PhraseListDialog';
import { FaList } from "react-icons/fa";

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
        <button className="py-1 text-sm flex items-center font-semibold " onClick={()=>{showPhraseList()}}><FaList className={"mr-2 text-xl"}/> Saved <span className="ml-2">{phraseList.length}</span></button>
        <PhraseListDialog open={phraseListOpen} setOpen={setPhraseListOpen} phraseList={phraseList}/>
    </div>
  )
}

export default ReaderHeader