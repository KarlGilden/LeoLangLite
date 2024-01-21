import { DictionaryEntry } from "../types/TranslationTypes";

export const exportFile = (phraseList:DictionaryEntry[]) => {
    const content = _formatExportContent(phraseList);

    const link = document.createElement('a');

    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([content], { type: 'text/plain' });

    // Add file content in the object URL
    link.href = URL.createObjectURL(file);

    // Add file name
    link.download = "sample.txt";

    // Add click event to <a> tag to save file.
    link.click();
    URL.revokeObjectURL(link.href);
}

const _formatExportContent = (phraseList:DictionaryEntry[]) => {
    let returnString = "";

    for(let i=0;i<phraseList.length;i++){
        returnString += `${phraseList[i].original};${phraseList[i].translations[0]}\n`
    }

    return returnString;
};