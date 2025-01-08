interface IProps {
    children:any,
    link: string,
}
const IconLink = ({children, link}:IProps) => {
  return (
    <a target='_blank' href={link} className='transition-all ease-in-out duration-300 hover:text-highlight'>{children}</a>
)
}

export default IconLink