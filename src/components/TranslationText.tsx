interface IProps {
    translation: string
}

const TranslationText = ({translation}:IProps) => {
  return (
    <div>{translation}</div>
  )
}

export default TranslationText