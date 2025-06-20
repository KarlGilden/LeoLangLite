import { WordService } from "../data/services/wordService";

interface IUserInfo {
    getUserDictionary: ()=>Promise<DictionaryEntry[]>;
    getLearningWordsCount: ()=>Promise<Count>;
    getKnownWordsCount: ()=>Promise<Count>;
}

export const useUserInfo = (): IUserInfo => {
    const service = new WordService();

    const getUserDictionary = async () => {
        const words: DictionaryEntry[] = await service.getUserDictionary();

        return words
    }

    const getKnownWordsCount = async () => {
        const count: Count[] = await service.getKnownWordsCountForUser();

        return count[0];
    }

    const getLearningWordsCount = async () => {
        const count: Count[] = await service.getLearningWordsCountForUser();

        return count[0]
    }

    

    return { getUserDictionary, getKnownWordsCount, getLearningWordsCount};
};