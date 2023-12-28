import rangy from 'rangy';

export const hightlightText = (wrapper: HTMLSpanElement) => {

    //get selected text ids
    const selection = rangy.getSelection().getRangeAt(0)

    // get parent elements for start and end elements
    const startParentElement = selection.startContainer.parentElement
    const endParentElement = selection.endContainer.parentElement

    // null check
    if(!startParentElement || !endParentElement) return;

    // get ids
    const startId = startParentElement.id
    const endId = endParentElement.id

    // get indexes as ints
    const startIndex = startId.substring(1)
    const endIndex = endId.substring(1)

    // get start element
    const start = document.getElementById(startId)

    // create wrapper and add class styles
    wrapper.classList.add("selected-text");
    wrapper.id = "selected-text"

    // null check
    if(!start?.parentElement) return;

    // insert wrapper node
    start.parentElement.insertBefore(wrapper, start)

    // pack words into wrapper
    for(let i:number=parseInt(startIndex);i<=parseInt(endIndex);i++){
        const toAppend = document.getElementById("w"+i)
        const nextSibling = toAppend?.nextSibling;
        if(!toAppend) return
        wrapper.appendChild(toAppend)
        if(nextSibling && i !== parseInt(endIndex)){
            wrapper.appendChild(nextSibling)
        }
    }

    // get phrase
    const phrase = wrapper.textContent || "";

    return formatWord(phrase);
}

export const formatWord = (str:string) => {
    return str.replace(/[^a-z0-9 āēīōū]/gi, '').toLowerCase();
};