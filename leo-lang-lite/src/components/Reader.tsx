import { hightlightText } from '../util/Selection';

interface IProps {
    text: string[][]
    define: (phrase:string)=>void
}

const Reader = ({text, define}:IProps) => {

    let paragraphIndex = 0;
    let wordIndex = 0;

    const handleSelect = () => {
        const wrapper = document.createElement("span")
        const phrase = hightlightText(wrapper) || "";

        // send phrase to dictionary
        define(phrase.replace("\n", ""))
    };

  return (
    <div className='reader-wrapper'>
        {text.map((paragraph)=>{
            paragraphIndex++;
            return (
                <div className='paragraph' key={`p${paragraphIndex}`} onMouseUp={handleSelect} id={`p${paragraphIndex}`}>
                    {paragraph.map((word)=>{
                        wordIndex++;
                        return (
                            <><span className='flex inline-flex items-center' key={`w${wordIndex}`} id={`w${wordIndex}`}>{word}</span> </>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Reader