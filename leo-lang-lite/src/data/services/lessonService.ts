

export const fetchText = () => {
    return new Promise<string[][]>((resolve, reject)=>{
        const text = localStorage.getItem("text");
        if(text){
            return resolve(JSON.parse(text));
        }else{
            return reject();
        }
    });
};

export const updateText = (text:string) => {
    return new Promise<string>((resolve, reject)=>{
        if(_textIsValid(text)){
            const formattedText = _buildText(text);
            localStorage.setItem("text", formattedText);
            return resolve(formattedText);
        }else{
            reject();
        }
    });

};

const _textIsValid = (text:string) => {
    if(text === ""){
        return false;
    }
    return true;
};

const _buildText = (text:string) => {
    const paragraphs = text.split("\n\n");
    const formattedText = [];

    for(let i=0;i<paragraphs.length;i++){
        formattedText.push(paragraphs[i].split(" ")); 
    }

    return JSON.stringify(formattedText);
};