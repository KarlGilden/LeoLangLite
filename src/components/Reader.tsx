import { Fragment } from 'react';
import { selectAndGetText, removeHighlight } from '../util/Selection';

interface IProps {
    text: string[][]
    define: (phrase:string)=>void
}

const Reader = ({text, define}:IProps) => {

    let paragraphIndex = 0;
    let wordIndex = 0;

    const handleSelect = () => {
        removeHighlight();
        
        const phrase = selectAndGetText();

        if(phrase){
            define(phrase.replace("\n", ""))
        }
    };

    const mouseDown = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const wrapper = document.getElementById("selected-text");
        if(!e.target) return;
        if(wrapper){
            if (!wrapper.contains(e.target as HTMLElement)) {
                wrapper.replaceWith(...wrapper.childNodes)
            }
        }
    }

  return (
    <div className={`max-w-[600px]`}>
    <div onMouseDown={(e)=>mouseDown(e)} className='reader-wrapper select-text text-xl pb-40'>
        {text.map((paragraph)=>{
            paragraphIndex++;
            return (
                <Fragment key={"f1"+paragraph}>
                <div className='paragraph select-text' key={`p${paragraphIndex}`} onMouseUp={handleSelect} id={`p${paragraphIndex}`}>
                    {paragraph.map((word, index)=>{
                        wordIndex++;
                        return (
                            <Fragment key={"f2"+index}><span className='flex inline-flex items-center border-transparent border-solid border-2 rounded-md hover:border-wash cursor-pointer' key={`w${wordIndex}`} id={`w${wordIndex}`}>{word}</span></Fragment>
                        )
                    })}
                </div>
                <br />
                </Fragment>
            )
        })}
    </div>
    </div>
  )
}

export default Reader