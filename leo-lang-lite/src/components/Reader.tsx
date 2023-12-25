import './css/Reader.css';
import { translate } from '../util/GoogleApi';
import { TranslationResult } from '../types/GoogleTranslateAPI';
import { hightlightText } from '../util/Selection';

interface IProps {
    text: string[][]
    showDictionary: (show:boolean)=>void
    setPhrase: (phrase:TranslationResult)=>void
    setLoading: (loading:boolean)=>void
}

const Reader = ({text, showDictionary, setPhrase, setLoading}:IProps) => {

    let paragraphIndex = 0;
    let wordIndex = 0;

    const handleSelect = () => {
        const wrapper = document.createElement("span")
        const phrase = hightlightText(wrapper) || "";

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
    };

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
                <div className='paragraph' key={`p${paragraphIndex}`} onMouseUp={handleSelect} id={`p${paragraphIndex}`}>
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