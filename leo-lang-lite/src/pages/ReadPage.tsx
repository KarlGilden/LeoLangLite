import { useEffect, useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";
import { DictionaryEntry } from "../types/TranslationTypes";
import { translate } from "../util/Translation";
import PhraseListDialog from "../components/PhraseListDialog";

const ReadPage = () => {
    console.log('render')
    const router = useRouter();

    const [text, setText] = useState([["No content"]]);
    const [phraseList, setPhraseList] = useState<DictionaryEntry[]>([]);
    const [loadingTranslation, setLoadingTranslation] = useState(false);
    const [originalPhrase, setOriginalPhrase] = useState("");
    const [currentPhrase, setCurrentPhrase] = useState<DictionaryEntry>({original:"", translations:[""]});
    const [phraseListOpen, setPhraseListOpen] = useState(false);

    useEffect(()=>{
        setText(getText());
    },[]);

    const addPhraseToList = (translation:DictionaryEntry) => {
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

    const getText = () => {
        if(!localStorage.getItem("text")){
            return router.navigate('/import');
        }
        return JSON.parse(localStorage.getItem("text") || "[['No Content']]");
    };

    const showPhraseList = () => {
        if(phraseList.length > 0){
            setPhraseListOpen(true);
        }
    }

    const define = async (phrase:string) => {
        setLoadingTranslation(true);
        setOriginalPhrase(phrase);
        setCurrentPhrase({original:"", translations:[""]});

        await translate(phrase, phraseList).then((translation)=>{
            if(!translation) return;
            setCurrentPhrase(translation);
        }).catch(()=>{

        });

        setLoadingTranslation(false)
    }

    // add event listener to remove selection on click away
    document.addEventListener('mousedown', function(e) {
        const wrapper = document.getElementById("selected-text");
        if(!e.target) return;
        if(wrapper){
            if (!wrapper.contains(e.target as HTMLElement)) {
                wrapper.replaceWith(...wrapper.childNodes)
            }
        }
        });

  return (
    <>
        <div className="px-5 pt-16 pb-28 flex flex-col items-center">
            <div className="flex w-full max-w-[600px] py-4">
                <button className="py-1 px-4 text-sm rounded-full bg-[#000] text-[#fff]" onClick={()=>{showPhraseList()}}>Saved <span className="font-semibold ml-2">{phraseList.length}</span></button>
            </div>
            <div className="flex justify-center">
                <Reader text={text} define={define}/>
                <Dictionary 
                    loading={loadingTranslation}
                    original={originalPhrase} 
                    currentPhrase={currentPhrase}
                    phraseIsSaved={indexOfPhrase(originalPhrase) >= 0}
                    setCurrentPhrase={setCurrentPhrase} 
                    addPhrase={addPhraseToList}
                    updatePhrase={updatePhraseInList}
                    removePhrase={removePhraseFromList}
                />
            </div>
    </div>
    <PhraseListDialog open={phraseListOpen} setOpen={setPhraseListOpen} phraseList={phraseList}/>
    </>
  )
}

export default ReadPage