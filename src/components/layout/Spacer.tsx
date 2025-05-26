interface IProps{
    size: number
}

function Spacer({size}:IProps) {
  return (
    <div className={`p-${size}`}></div>
  )
}

export default Spacer