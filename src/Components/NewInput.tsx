const NewInput = (props: any) => {
    // const {placeholder, inputChange} = props;
  return (
    <div>
        <input type='text'  placeholder={props.placeholder} onChange={props.inputChange}/>
    </div>
  )
}

export default NewInput;
