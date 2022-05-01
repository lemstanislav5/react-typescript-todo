import React, {useRef} from 'react'

interface TodoFormProps{
  onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
const ref = useRef<HTMLInputElement>(null)
// const [title, setTitle] = useState<string>('')
const chehgeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setTitle(event.target.value)
}
const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  if(event.key === 'Enter') {
    props.onAdd(ref.current!.value)
    ref.current!.value = ''
    // setTitle('')
  }
}
  return(
    <div className='input-field mt-2'>
      <input 
        // value={title} 
        ref={ref}
        onChange={chehgeHandler}
        onKeyPress={keyPressHandler}
        type='text' id='title' 
        placeholder='Введите название дела'/>
      <label htmlFor='title' className='active'>Введите название дела</label>
    </div>
  )
}