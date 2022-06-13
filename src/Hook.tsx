import * as React from 'react';
import { Argument} from 'webpack';
import { useState } from 'react';
import trashImg from './img/trash.png'
import addImg from './img/add.png'
import editImg from './img/edit.png'


export default function Add () {
  const [arr, setArr] = useState([]);
  const [input,setInput] = useState('')
  const [edit,setEdit] = useState('')
  
  let editArr = (ind:number) => 
    setArr([...arr.slice(0,ind),+edit,...arr.slice(ind+1)]);

  let pasteArr = (ind:number) => 
    setArr([...arr.slice(0,ind),+edit,...arr.slice(ind)]);

  let delArr = (ind:number) => 
    setArr([...arr.slice(0,ind),...arr.slice(ind+1)]);
 
  let x =0
  const sum = arr.map(elem => x+=elem, x)
  const mul = arr.map(elem => x*=elem, x=1)
  
  const style = {
    border: '1px solid black',
    height: '34px',
    listStyleType:'none',
    with: '50px',
  
  }
 
  return (
    
    <div>
    <header>
      <button onClick={() => setArr(arr.concat(+input)) }>Считать!</button>
      <input value={input} onChange={(event) => setInput(event.target.value)}/>
    </header>
    <table style={{
       backgroundColor:'#C9CBD1',
       textAlign: 'center',
       border: '3px solid black',
       borderCollapse: 'collapse'
    }}>
        <td>
          <th style={{border:'2px solid black'}}>Числа</th>
            {arr.map((elem,ind) => <tr style={style} key={(elem+ind.toString())}>{elem}</tr>)}
        </td>
        <td>  
          <th style={{border:'2px solid black'}}>Сумма</th>
          {sum.map((elem,ind) => <tr style={style} key={(elem+ind.toString())}>{elem}</tr>)}
        </td>
        <td>
          <th style={{border:'2px solid black'}}>Произведение</th>
          {mul.map((elem,ind) => <tr style={style} key={(elem+ind.toString())}>{elem}</tr>)}
        </td>
        <td>
          <th style={{border:'2px solid black'}}>Изменить</th>
          {arr.map((elem,ind) => <tr style={style} key={(elem+ind.toString())}>
            <input onChange={(event) => setEdit(event.target.value)}/>
            <button onClick={() => editArr(ind)}><img style={{
              width:'22px',
              height: '22px'}} src={editImg}/></button></tr>)}
        </td>
        <td>      
          <th style={{border:'2px solid black'}}>Добавить</th>
          {arr.map((elem,ind) => <tr style={style} key={(elem+ind.toString())}>
            <button onClick={() => pasteArr(ind)}><img style={{
              width:'22px',
              height: '22px'}} src={addImg}/></button></tr>)}
        </td>
        <td>      
          <th style={{border:'2px solid black'}}>Удалить</th>
          {arr.map((elem,ind) => <tr style={style} key={(elem+ind.toString())}>
            <button onClick={() => delArr(ind)}><img style={{
              width:'22px',
              height: '22px'}} src={trashImg}/></button></tr>)}
        </td>
     </table>

    </div>
  )
}
