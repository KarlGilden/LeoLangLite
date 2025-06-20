import { PostgrestSingleResponse } from "@supabase/supabase-js";
import supabase from "../supabase";

interface IWordService {
    getUserDictionary: ()=>Promise<DictionaryEntry[]>;
    getLearningWordsCountForUser: ()=>Promise<Count[]>;
    getKnownWordsCountForUser: ()=>Promise<Count[]>;
}

interface WordJoinResult { 
    created_at: any; 
    id: any; 
    level: any;
    words: { word: any; }; 
    user_selected_definitions: { 
        definitions: { 
            definition_text: any; 
        }; 
    }[]; 
}[];

export class WordService implements IWordService {

    public getUserDictionary = async () => {
        const {data, error} = await supabase.from('user_saved_words')
        .select(`
            created_at,
            level,
            id:word_id,
            words (
             word
            ),
            user_selected_definitions (
                definitions (
                    definition_text
                )
            )
        `) as PostgrestSingleResponse<WordJoinResult[]>;;
        
        if(error){
            throw new Error(error.message);
        }

        const flattened = data.map(entry => ({
            word:{
                id: entry.id,
                level: entry.level,
                word_text: entry.words.word,
                created_at: entry.created_at
            },
            definitions: entry.user_selected_definitions.map(def => ({
                definition_text: def.definitions.definition_text,
            }))
        }));

        return flattened as DictionaryEntry[];
    }

        public getKnownWordsCountForUser = async () => {
        const {data, error} = await supabase.from("user_saved_words").select("count").eq("level", 5);
        
        if(error){
            throw new Error(error.message);
        }

        return data as Count[];
    }

        public getLearningWordsCountForUser = async () => {
        const {data, error} = await supabase.from("user_saved_words").select("count").lt("level", 5);
        
        if(error){
            throw new Error(error.message);
        }

        return data as Count[];
    }
}