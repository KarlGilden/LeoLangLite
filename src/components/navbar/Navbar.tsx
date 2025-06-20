import { useAuth } from "../../hooks/AuthProvider"
import NavItem from "./NavItem";
import NavList from "./NavList";
import NavUserInfo from "./NavUserInfo";

const Navbar = () => {
  const { user } = useAuth();

  console.log(user);

  const identity = user?.identities ? user.identities[0].identity_data : null;

  return (
    <nav className='absolute top-0 left-0 h-[50px] px-5 flex justify-between bg-primary text-white w-full'>
        <NavList>
            <NavItem href="/dashboard">Dashboard</NavItem>
            <NavItem href="/review">Review</NavItem>
        </NavList>
        <NavList>
        <NavItem href="/profile">
          <NavUserInfo username={identity?.name || "" } imgUrl={identity?.avatar_url} />
        </NavItem>
        <NavItem href=""><small>Sign out</small></NavItem>
      </NavList>
    </nav>
  )
}

export default Navbar