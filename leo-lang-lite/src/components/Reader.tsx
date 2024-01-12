import { Fragment } from 'react';
import { hightlightText } from '../util/Selection';

interface IProps {
    text: string[][]
    define: (phrase:string)=>void
}

const Reader = ({text, define}:IProps) => {

    let paragraphIndex = 0;
    let wordIndex = 0;

    const handleSelect = () => {
        const currentWrapper = document.getElementById("selected-text");
        currentWrapper?.replaceWith(...currentWrapper.childNodes);
        const wrapper = document.createElement("span")
        const phrase = hightlightText(wrapper) || "";

        // send phrase to dictionary
        define(phrase.replace("\n", ""))
    };

  return (
    <div className='reader-wrapper select-text'>
        {text.map((paragraph)=>{
            paragraphIndex++;
            return (
                <div className='paragraph select-text' key={`p${paragraphIndex}`} onMouseUp={handleSelect} id={`p${paragraphIndex}`}>
                    {paragraph.map((word, index)=>{
                        wordIndex++;
                        return (
                            <Fragment key={"f"+index}><span className='flex inline-flex items-center' key={`w${wordIndex}`} id={`w${wordIndex}`}>{word}</span> </Fragment>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Reader