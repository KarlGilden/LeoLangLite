import { TranslationResult } from '../types/GoogleTranslateAPI'
import './css/Dictionary.css'

interface IProps {
    show: boolean
    phrase: TranslationResult
    loading: boolean
}

const Dictionary = ({show, phrase, loading}:IProps) => {
  return (
    <div className={`${show?"show":"hide"} dictionary`}>
        <p>{!loading ? phrase.data.translations[0].translatedText : "Loading..."}</p>
    </div>
  )
}

export default Dictionary