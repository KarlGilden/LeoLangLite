import { ReactNode } from 'react'
import { Translation } from '../../types/GoogleTranslateAPI'

interface IProps{
    action: (word:Translation)=>void
    input: Translation,
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