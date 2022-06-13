import * as React from 'react';
import { Argument} from 'webpack';
import trash from './img/trash.png'
import add from './img/add.png'
import edit from './img/edit.png'

interface CodeInputState {
  title ?: any;
  number?: Array<number>;
  sum?: Array<number>;
  mul?:Array<number>;
  edit?: number;

}

class Code extends React.Component<{}, CodeInputState>{
  constructor(props:string) {
    super(props);
    this.state = {
      title: '',
      number: [],
      sum: [],
      mul:[],
      edit: null
    }
  }
  input = (event:any) => {
    this.setState ({
      title: +event.target.value
    })
  }
  editInput = (event:any) => {
    this.setState({
      edit: +event.target.value
    })
  }
  pasteArray = (ind:number) => {
    let c = [...this.state.number.slice(0,ind),this.state.edit,...this.state.number.slice(ind)];
    this.setState({
      number: c,
    })
  }
  editArray = (ind:number) => {
    let a = [...this.state.number.slice(0,ind),this.state.edit,...this.state.number.slice(ind+1)]
    this.setState({
      number:a ,
    })
  }
  deleteResult = () => {
    this.setState({
      number: [],
      sum: [],
      mul:[],
    })
  }
  deleteStr = (ind:any) => {
    this.setState({
      number:[...this.state.number.slice(0,ind),...this.state.number.slice(ind+1)],
    })
  }
  showArray = () => {
    let a = this.state.number
    a.push(this.state.title)
    this.setState({
      number: a,
    })   
  }
  render() {    
    let x = 0
    const sum = this.state.number.map(elem => x+=elem, x)
    const mul = this.state.number.map(elem => x*=elem, x=1)
    
    const tableStyle = {
      border: '1px solid black',
      height: '34px',
      listStyleType:'none',
    }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.showArray}>Считаем?</button>
        <input  type ="number" className = "input-add" placeholder="Write number" onInput={this.input}/>
        <button onClick={this.deleteResult}>Обнуляем?</button>
       
      </header>
        <table style={{
        backgroundColor:'#C9CBD1',
        textAlign: 'center',
        border: '3px solid black',
        borderCollapse: 'collapse'
        }}>
        <td> <th style={{border: '1px solid black'}}>№ строки</th>
          {this.state.number.map((elem,ind) =>
          <tr style={tableStyle} key={elem+ind.toString()}>{ind+1}</tr>
          )}
        </td>
        <td> <th style={{border: '1px solid black'}}>Введенеые числа</th>
          {this.state.number.map((elem,ind) => 
          <tr style={tableStyle} key={elem+ind.toString()}>{elem}</tr>
          )}
        </td>
        <td> <th style={{border: '1px solid black'}}>Сумма чисел</th>{
          sum.map((elem,ind) => 
          <tr style={tableStyle} key={ind.toString()}>{elem}</tr>
          )}
        </td>    
        <td> <th style={{border: '1px solid black'}}>Произведение чисел</th>{
          mul.map(elem => <tr style={tableStyle}>{elem} </tr>
          )}
        </td>       
        <td> <th style={{border: '1px solid black'}}>Тыкай тут, что бы удалить строку</th>
         {this.state.number.map((elem,ind,arr) => 
          <tr style={tableStyle} key={ind.toString()}><button className='buttonDel' 
            onClick={() => this.deleteStr(ind)}><img style={{
              width: '22px',
              height: '22px'
            }}src={trash}/></button>
          </tr>
         )}
        </td> 
        <td> <th style={{border: '1px solid black'}}>Редактировать строку</th>{
          this.state.number.map((elem,ind) => 
          <tr style={tableStyle}><button onClick={() => this.editArray(ind)}><img style={{
            width: '22px',
            height: '22px'
          }}src={edit}/></button>
          <input style={{maxWidth: '100px'}} onInput={this.editInput} /></tr>)
        }</td>
        <td> <th style={{border: '1px solid black'}}>Вставить строку</th>{
          this.state.number.map((elem,ind) => 
          <tr style={tableStyle}><button onClick={() => this.pasteArray(ind)}><img style={{
            width: '22px',
            height: '22px'
          }}src={add}/></button>
          </tr>)
        }</td> 
        </table>
      </div>
      );
  }  
}

  


export default Code;
