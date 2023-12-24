import rangy from 'rangy';
import './css/Reader.css';
import { translate } from '../util/GoogleApi';
import { TranslationResult } from '../types/GoogleTranslateAPI';

interface IProps {
    text: string[][]
    showDictionary: (show:boolean)=>void
    setPhrase: (phrase:TranslationResult)=>void
    setLoading: (loading:boolean)=>void
}

const Reader = ({text, showDictionary, setPhrase, setLoading}:IProps) => {

    let paragraphIndex = 0;
    let wordIndex = 0;

    const getSelected = () => {

        //get selected text ids
        const selection = rangy.getSelection().getRangeAt(0)
    
        // get parent elements for start and end elements
        const startParentElement = selection.startContainer.parentElement
        const endParentElement = selection.endContainer.parentElement
    
        // null check
        if(!startParentElement || !endParentElement) return;
    
        // get ids
        const startId = startParentElement.id
        const endId = endParentElement.id
    
        // get indexes as ints
        const startIndex = startId.substring(1)
        const endIndex = endId.substring(1)
    
        // get start element
        const start = document.getElementById(startId)
    
        // create wrapper and add class styles
        const wrapper = document.createElement("span")
        wrapper.classList.add("word-highlight")
    
        // null check
        if(!start?.parentElement) return;
    
        // insert wrapper node
        start.parentElement.insertBefore(wrapper, start)
    
        // pack words into wrapper
        for(let i:number=parseInt(startIndex);i<=parseInt(endIndex);i++){
            const toAppend = document.getElementById("w"+i)
            const nextSibling = toAppend?.nextSibling;
            if(!toAppend) return
            wrapper.appendChild(toAppend)
            if(nextSibling && i !== parseInt(endIndex)){
                wrapper.appendChild(nextSibling)
            }
        }

        // get phrase
        const phrase = wrapper.textContent || "";

        // send phrase to dictionary
        define(phrase.replace("\n", ""))
        
        // add event listener to remove selection on click away
        document.addEventListener('mousedown', function(e) {
        if(!e.target) return
        if(wrapper){
            if (!wrapper.contains(e.target as HTMLElement)) {
            wrapper.replaceWith(...wrapper.childNodes)
            showDictionary(false)
            }
        }
        });
    }

    const define = async (phrase:string) => {
        showDictionary(true);
        setLoading(true);
        translate(phrase, "mi").then((res)=>{
            setPhrase(res);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
        });
    }

  return (
    <div className='reader-wrapper'>
        {text.map((paragraph)=>{
            paragraphIndex++;
            return (
                <div className='paragraph' key={`p${paragraphIndex}`} onMouseUp={getSelected} id={`p${paragraphIndex}`}>
                    {paragraph.map((word)=>{
                        wordIndex++;
                        return (
                            <><span className='word' key={`w${wordIndex}`} id={`w${wordIndex}`}>{word}</span> </>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Reader