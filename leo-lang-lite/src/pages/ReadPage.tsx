import { useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";
import { DictionaryEntry } from "../types/TranslationTypes";
import { translate } from "../util/Translation";
import ReaderHeader from "../components/ReaderHeader";

const ReadPage = () => {
    console.log('page render')
    const router = useRouter();

    const [phraseList, setPhraseList] = useState<DictionaryEntry[]>([]);
    const [currentPhrase, setCurrentPhrase] = useState<DictionaryEntry>({original:"", translations:[""]});

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

    const define = async (phrase:string) => {
        setCurrentPhrase({original: phrase, translations:[""]})

        await translate(phrase, phraseList).then((translation)=>{
            if(!translation) return;
            setCurrentPhrase(translation);
        })
    }

    // add event listener to remove selection on click away


  return (
    <div className="px-5 pt-16 pb-28 flex flex-col items-center">
        <ReaderHeader phraseList={phraseList} />
        <div className="flex justify-center">
            <Reader text={getText()} define={define}/>
            <Dictionary 
                currentPhrase={currentPhrase}
                phraseIsSaved={indexOfPhrase(currentPhrase) >= 0}
                setCurrentPhrase={setCurrentPhrase} 
                addPhrase={addPhraseToList}
                updatePhrase={updatePhraseInList}
                removePhrase={removePhraseFromList}
            />
        </div>
    </div>
  )
}

export default ReadPage