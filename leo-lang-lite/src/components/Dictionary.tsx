import './css/Dictionary.css'

interface IProps {
    show: boolean
    phrase: string
}

const Dictionary = ({show, phrase}:IProps) => {
  return (
    <div className={`${show?"show":"hide"} dictionary`}>
        <h1>{phrase}</h1>
    </div>
  )
}

export default Dictionary