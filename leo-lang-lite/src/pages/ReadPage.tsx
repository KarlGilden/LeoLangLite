const ReadPage = () => {

    let text = "";

    const loadText = () => {
        text = localStorage.getItem("text") || "";
    };

    loadText();

  return (
    <div>
        <h1>Read</h1>
        <p>{text}</p>
    </div>
  )
}

export default ReadPage