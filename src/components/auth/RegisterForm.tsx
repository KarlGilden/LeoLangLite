import { ChangeEvent, useState } from "react"
import Spacer from "../layout/Spacer"
import LoginInput from "./LoginInput"
import { useAuth } from "../../hooks/AuthProvider";

interface RegisterData {
  email:string;
  username:string;
  password:string;
  confirmPassword:string;
}

const RegisterForm = () => {
  const { credentialsRegisterAction } = useAuth();

  const [inputValue, setInputValue] = useState<RegisterData>({email: "", username: "", password: "", confirmPassword: ""});
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { email, username, password, confirmPassword } = inputValue;

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

    if(isPasswordValidError()){
      setErrorMessage("Password must be 10 characters long and contain at least 1 uppercase, number, and symbol")
      return;
    }

    if(isPasswordMismatchError()) {
      setErrorMessage("Passwords do not match");
      return;
    };

    setErrorMessage("");
    credentialsRegisterAction(inputValue).then((data)=>{
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

    if(!username){
      setNameError(true);
      isError = true;
    }else{
      setNameError(false)
    }

    if(!password){
      setPasswordError(true);
      isError = true;
    }else{
      setPasswordError(false)
    }

    if(!confirmPassword){
      setConfirmPasswordError(true);
      isError = true;
    }else{
      setConfirmPasswordError(false);
      (false)
    }
    
    return isError;
  }

  const isPasswordValidError = () => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$/;
    const isValidPassword = passwordRegex.test(password);

    setPasswordError(!isValidPassword);

    return !isValidPassword;
  }

  const isPasswordMismatchError = () => {
    if(password === confirmPassword) { 
      setConfirmPasswordError(false)
      return false;
    }

    setConfirmPasswordError(true)
    return true;
  }

  return (
    <div className='bg-white max-w-[300px] w-full p-5 shadow-container rounded-sm'>
        <h1 className="mb-2 text-2xl">Register</h1>
        <Spacer size={1}/>
        <LoginInput type="email" label="Email" value={email} name="email" hasError={emailError} onChange={handleChange}/>
        <Spacer size={1}/>
        <LoginInput type="text" label="Username" value={username} name="username" hasError={nameError} onChange={handleChange}/>
        <Spacer size={1}/>
        <LoginInput type="password" label="Password" value={password} name="password" hasError={passwordError} onChange={handleChange}/>
        <Spacer size={1}/>
        <LoginInput type="password" label="Confirm Password" value={confirmPassword} name="confirmPassword" hasError={confirmPasswordError} onChange={handleChange}/>
        <Spacer size={2}/>
        <button onClick={onSubmit} className="bg-highlight w-full p-1 rounded-sm">Submit</button>
        <small className="text-red">{errorMessage}</small>
    </div>
  )
}

export default RegisterForm