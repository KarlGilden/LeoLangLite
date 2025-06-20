interface IProps {
    headers: string[],
    data: any[]
}

const DataTable = ({headers, data}:IProps) => {
  return (
    <table className='w-full rounded-lg overflow-hidden'>
        <thead className="bg-highlight">
            <tr className='text-left'>
                {headers.map((header, index)=>{
                    return <th key={index} className='p-3 font-bold'>{header}</th>
                })}
            </tr>
        </thead>
        <tbody className="">
            {data.map((row, index)=>{
                return(
                    <tr key={index} className='even:bg-wash'>
                        {row.map((value:any, index:number)=>{
                            return <td key={index} className='p-3'>{value[headers[index]]}</td> 
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default DataTable