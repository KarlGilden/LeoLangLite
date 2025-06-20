import Spacer from "../layout/Spacer"

interface IProps {
    username: string
    imgUrl: string
}

const NavUserInfo = ({ username, imgUrl }:IProps) => {
  return (
    <div className="flex items-center hover:">
        <p>{username}</p>
        <Spacer size={1} />
        <div className="h-10 w-10  rounded-full overflow-hidden">
            <img src={imgUrl} alt="" />
        </div>
    </div>
  )
}

export default NavUserInfo