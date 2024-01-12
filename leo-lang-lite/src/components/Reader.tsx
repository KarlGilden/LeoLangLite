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

  return (
    <div className='max-w-[600px] reader-wrapper select-text'>
        {text.map((paragraph)=>{
            paragraphIndex++;
            return (
                <Fragment key={"f1"+paragraph}>
                <div className='paragraph select-text' key={`p${paragraphIndex}`} onMouseUp={handleSelect} id={`p${paragraphIndex}`}>
                    {paragraph.map((word, index)=>{
                        wordIndex++;
                        return (
                            <Fragment key={"f2"+index}><span className='flex inline-flex items-center' key={`w${wordIndex}`} id={`w${wordIndex}`}>{word}</span> </Fragment>
                        )
                    })}
                </div>
                <br />
                </Fragment>
            )
        })}
    </div>
  )
}

export default Reader