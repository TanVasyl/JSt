import * as React from 'react';
import { Argument} from 'webpack';





interface CodeInputState {
  title ?: any;
  number?: Array<number>;
  sum?: Array<number>;
  mul?:Array<number>;
}

class Code extends React.Component<{}, CodeInputState>{
  constructor(props:string) {
    super(props);
    this.state = {
      title: '',
      number: [],
      sum: [],
      mul:[]
    }
  }
  input = (event:any) => {
    this.setState ({
      title: event.target.value
    })
  }
  showArray = () => {
    let a:Array<number> = this.state.number
    a.push(+this.state.title);
    let x =0
    this.setState({
      number: a,
      sum: this.state.number.map(elem => x+=elem, x=0),
      mul: this.state.number.map(elem => x*=elem, x=1),
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
    let a = [...this.state.number.slice(0,ind),...this.state.number.slice(ind+1)]
    let x =0
    this.setState({
      number:a,
      sum: a.map(elem => x+=elem, x),
      mul: a.map(elem => x*=elem, x=1)
    })
  }
  render() {    
    const tableStyle = {
      border: '1px solid black',
      height: '20px',
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
          this.state.sum.map((elem,ind) => 
          <tr style={tableStyle} key={ind.toString()}>{elem}</tr>
          )}
        </td>    
        <td> <th style={{border: '1px solid black'}}>Произведение чисел</th>{
          this.state.mul.map(elem => <tr style={tableStyle}>{elem} </tr>
          )}
        </td>      
        <td> <th style={{border: '1px solid black'}}>Тыкай тут, что бы удалить строку</th>
         {this.state.number.map((elem,ind,arr) => 
          <tr style={tableStyle} key={ind.toString()}><button style={{
             height:'18px',
             backgroundColor: '#ffff',
            }} 
            onClick={() => this.deleteStr(ind)}>Удали Меня</button>
          </tr>
         )}
        </td> 
        </table>   
      </div>
      );
  }  
}

  


export default Code;
