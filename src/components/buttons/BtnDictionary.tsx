import { ReactNode } from 'react'

interface IProps{
    action: ()=>void
    visible: boolean,
    children: ReactNode
}

const BtnDictionary = ({action, visible, children}:IProps) => {
  return (
    <button className={`${visible ? 'block': 'hidden'} py-2 mr-2`} onClick={()=>{action()}}>
        {children}
    </button>
  )
}

export default BtnDictionary