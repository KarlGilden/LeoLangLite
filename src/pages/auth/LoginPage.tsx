import LoginForm from "../../components/auth/LoginForm"
import { IoArrowBack } from "react-icons/io5";
import useRouter from "../../hooks/useRouter";

const LoginPage = () => {
  const { navigate } = useRouter();

  const handleBackPress = () => {
    navigate('/');
  }

  return (
    <div className="bg-primary flex flex-col justify-center items-center h-full">
      {/* <nav className="flex justify-center w-full p-10">
        <div className="max-w-[600px] w-full">
          <button onClick={handleBackPress} className="text-highlight"><IoArrowBack className="text-4xl"/></button>
        </div>
      </nav> */}
      <LoginForm/>
    </div>
  )
}

export default LoginPage