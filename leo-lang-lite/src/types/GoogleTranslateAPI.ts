export type TranslationResult = {
    data:{
        translations: [
            {
                translatedText: string
            }
        ]
    }
}

export type Translation = {
    original: string
    translation: string
}