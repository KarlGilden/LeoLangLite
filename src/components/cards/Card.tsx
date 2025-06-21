import { ReactNode } from 'react'

interface IProps {
    children: ReactNode
    imgUrl: string
}

const Card = ({ imgUrl, children }: IProps) => {
  return (
    <div className='w-full h-fit md:max-w-[250px] rounded-md overflow-hidden shadow-container'>
        <div className='w-full h-[150px] bg-primary'>
            <img src={imgUrl} alt="" />
        </div>
        <div className='h-full p-2'>
            {children}
        </div>
    </div>
  )
}

export default Card