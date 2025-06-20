interface WordServiceResponse {
    data: Word[] | null,
    error: WordRequestError | null;
}

interface DictionaryEntry {
    word: Word,
    definitions: Definition[],
}

interface Definition {
    definition_text: string
}

interface Word {
    id:number;
    level:string;
    created_at: string;
    word_text:string;
}

interface Count {
    count: number
}

type WordRequestError = {
    status: number;
    message: string;
}