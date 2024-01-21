import { ReactNode } from 'react'
import { DictionaryEntry } from '../../types/TranslationTypes'

interface IProps{
    action: (word:DictionaryEntry)=>void
    input: DictionaryEntry,
    children: ReactNode
}

const BtnDictionary = ({action, input, children}:IProps) => {
  return (
    <button className='py-2 mr-2' onClick={()=>{action(input)}}>
        {children}
    </button>
  )
}

export default BtnDictionary