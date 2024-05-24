

const AcButtons = (props :any) => {
    console.log(props)
  return (
    <div className="d-flex flex w-full justify-center mt-4 content-center">
       
      <button className="rounded bg-red-400 p-1" onClick={props.btnClick}>
        {props.btnValue}</button>
        
    </div>
  )
}

export default AcButtons
