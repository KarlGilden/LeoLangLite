import useRouter from "../hooks/useRouter";

const ReadPage = () => {

    const router = useRouter();

    let text = "";

    const loadText = () => {
        text = localStorage.getItem("text") || "";
    };

    const checkData = () => {
        if(!localStorage.getItem("text")){
            router.navigate('/import');
        }
    }

    checkData();
    loadText();

  return (
    <div>
        <h1>Read</h1>
        <p>{text}</p>
    </div>
  )
}

export default ReadPage