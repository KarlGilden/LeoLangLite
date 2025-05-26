import { ChangeEvent, useState } from "react"
import Spacer from "../layout/Spacer"
import LoginInput from "./LoginInput"
import { useAuth } from "../../hooks/AuthProvider";

interface LoginData {
  email:string;
  password:string;
}

const LoginForm = () => {
  const { credentialsLoginAction, oAuthLoginAction } = useAuth();

  const [inputValue, setInputValue] = useState<LoginData>({email: "", password: ""});
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { email, password } = inputValue;

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    if(isFieldsPopulatedError()){
      setErrorMessage("Please fill in all fields");
      return;
    };

    setErrorMessage("");
    credentialsLoginAction(inputValue).then((data)=>{
      console.log(data)
    }).catch((error)=>{
      console.log("error: " + error)
    })
  }

  const isFieldsPopulatedError = () => {
    let isError = false;

    if(!email){
      setEmailError(true);
      isError = true;
    }else{
      setEmailError(false)
    }

    if(!password){
      setPasswordError(true);
      isError = true;
    }else{
      setPasswordError(false)
    }
    
    return isError;
  }

  return (
    <div className='bg-white max-w-[300px] w-full p-5 shadow-container rounded-sm'>
        <h1 className="mb-2 text-2xl">Login</h1>
        <Spacer size={1}/>
        <LoginInput type="email" label="Email" value={email} name="email" hasError={emailError} onChange={handleChange}/>
        <Spacer size={1}/>
        <LoginInput type="password" label="Password" value={password} name="password" hasError={passwordError} onChange={handleChange}/>
        <Spacer size={2}/>
        <button onClick={onSubmit} className="bg-highlight w-full p-1 rounded-sm">Submit</button>
        <Spacer size={1}/>
        <hr />
        <Spacer size={1}/>
        <button onClick={()=>oAuthLoginAction("google")} className="w-full">Login with Google</button>
        <small className="text-red">{errorMessage}</small>
    </div>
  )
}

export default LoginForm