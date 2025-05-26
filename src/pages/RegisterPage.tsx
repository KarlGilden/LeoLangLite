import { IoArrowBack } from "react-icons/io5";
import RegisterForm from "../components/auth/RegisterForm"
import useRouter from "../hooks/useRouter";

const RegisterPage = () => {
  const { navigate } = useRouter();

  const handleBackPress = () => {
    navigate('/');
  }

  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <nav className="absolute top-0 left-0 flex justify-center w-full p-10">
        <div className="max-w-[600px] w-full">
          <button onClick={handleBackPress} className="text-highlight"><IoArrowBack className="text-4xl"/></button>
        </div>
      </nav>
      <RegisterForm/>
    </div>
  )
}

export default RegisterPage