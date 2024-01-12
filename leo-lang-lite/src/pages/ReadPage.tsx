import { useEffect, useState } from "react";
import useRouter from "../hooks/useRouter";
import Reader from "../components/Reader";
import Dictionary from "../components/Dictionary";
import { Translation } from "../types/GoogleTranslateAPI";
import { translate } from "../util/GoogleApi";
import PhraseListDialog from "../components/PhraseListDialog";

const ReadPage = () => {
    console.log('render')
    const router = useRouter();

    const [text, setText] = useState([["No content"]]);
    const [phraseList, setPhraseList] = useState<Translation[]>([]);
    const [loadingTranslation, setLoadingTranslation] = useState(false);
    const [originalPhrase, setOriginalPhrase] = useState("");
    const [translatedPhrase, setTranslatedPhrase] = useState("");
    const [phraseListOpen, setPhraseListOpen] = useState(false);

    useEffect(()=>{
        checkData();
        setText(getText());
    },[]);

    const addPhraseToList = (phrase:Translation) => {
        if(phrase.original && phrase.translation){
            setPhraseList([...phraseList, phrase]);
        }
    };

    const updatePhraseInList = (phrase:Translation) => {
        if(phrase.original && phrase.translation){
            const index = indexOfPhrase(phrase);
            const tempPhraseList = phraseList.map((p, i) => {
                if (i === index) {
                  return {original: phrase.original, translation: phrase.translation};
                } else {
                  return p;
                }
              });
            setPhraseList(tempPhraseList);
        }
    };

    const removePhraseFromList = (phrase:Translation) => {
        if(phrase.original && phrase.translation){
            setPhraseList(phraseList.filter(p => p.original !== phrase.original));
        }
    };
    
    const indexOfPhrase = (phrase:string | Translation) => {
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
        return JSON.parse(localStorage.getItem("text") || "[['No Content']]");
    };

    const checkData = () => {
        if(!localStorage.getItem("text")){
            router.navigate('/import');
        }
    };

    const showPhraseList = () => {
        console.log(phraseList)
        if(phraseList.length > 0){
            setPhraseListOpen(true);
        }
    }

    const getTranslation = async (phrase:string) => {

        return new Promise<string>((resolve, reject) => {

            for(let i=0;i<phraseList.length;i++){
                if(phraseList[i].original === phrase){
                    return resolve(phraseList[i].translation);
                }
            }

            translate(phrase, "mi").then((res)=>{
                console.log(res)
                return resolve(res.data.translations[0].translatedText);
            }).catch((error)=>{
                console.log(error);
                return reject(error);
            });
        });
        
    }

    const define = async (phrase:string) => {
        setLoadingTranslation(true);
        setOriginalPhrase(phrase);
        setTranslatedPhrase("");

        const translation = await getTranslation(phrase);

        if(!translation) return;
        setTranslatedPhrase(translation);

        setLoadingTranslation(false)
    }

    const formatExportContent = () => {
        let returnString = "";

        for(let i=0;i<phraseList.length;i++){
            returnString += `${phraseList[i].original};${phraseList[i].translation}\n`
        }

        return returnString;
    };

    const createExportFile = () => {
        const content = formatExportContent();

        const link = document.createElement('a');

        // Create a blog object with the file content which you want to add to the file
        const file = new Blob([content], { type: 'text/plain' });

        // Add file content in the object URL
        link.href = URL.createObjectURL(file);

        // Add file name
        link.download = "sample.txt";

        // Add click event to <a> tag to save file.
        link.click();
        URL.revokeObjectURL(link.href);
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
        <div className="p-24 bg-blue-100 h-screen">
        <div className="flex w-full py-5">
                <button className="py-2 px-6 rounded-full bg-[#000] text-[#fff]" onClick={()=>{showPhraseList()}}>Phrase list <span className="font-semibold ml-2">{phraseList.length}</span></button>
            </div>
        <div className="flex justify-center">
            <Reader text={text} define={define}/>
            <Dictionary 
                loading={loadingTranslation}
                original={originalPhrase} 
                translated={translatedPhrase} 
                phraseIsSaved={indexOfPhrase(originalPhrase) >= 0}
                setTranslated={setTranslatedPhrase} 
                addPhrase={addPhraseToList}
                updatePhrase={updatePhraseInList}
                removePhrase={removePhraseFromList}
            />
        </div>
    </div>
    <PhraseListDialog open={phraseListOpen} setOpen={setPhraseListOpen} phraseList={phraseList} exportFile={createExportFile}/>
    </>


  )
}

export default ReadPage