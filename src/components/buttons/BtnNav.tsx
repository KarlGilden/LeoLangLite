interface IProps {
    children: string,
    size: string,
    type: string,
    btnFunction: ()=>void
}
const BtnNav = ({children, btnFunction, type, size}:IProps) => {
    const sizeOptions:any = {
        "small": "text-lg py-1 px-2 border-2",
        "medium": "text-lg py-2 px-6 border-2",
        "large": "text-xl py-3 px-8 border-[3px]"
    }

    const typeOptions:any = {
        "ghost": "border-primaryDark text-white hover:border-highlight",
        "solid": "border-primaryDark bg-primaryDark text-white hover:bg-highlight hover:border-highlight hover:text-black"
    }

  return (
    <button 
        onClick={()=>btnFunction()} 
        className={`${sizeOptions[size]} ${typeOptions[type]} rounded-full transition-all ease-in-out duration-300`}
    >
    {children}
  </button>
  )
}

export default BtnNav