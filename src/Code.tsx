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
      sum: []
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
     this.setState({
      number: a,
    })   
  }
  deleteResult = () => {
    this.setState({
      number: [],
    })
  }
  deleteStr = () => {
    let a:Array<number> = this.state.number  
    a.splice(0,1) 
      this.setState({
      number:a ,
    })
  }
  render() {    
    
      return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showArray}>Считаем?</button>
        <input  type ="number" className = "input-add" placeholder="Write number" onInput={this.input}/>
        <button onClick={this.deleteResult}>Обнуляем?</button>
       
        </header>
        <ul style={{display:'inline-block'}}>Введеные числа
          {this.state.number.map((elem,ind) => {
            return <li>{elem}</li>
          })}
        </ul>
        <ul style={{display:'inline-block'}}>Сумма чисел{
           this.state.sum.concat(this.state.number.reduce((prev,curr) =>
            prev+curr,0)).map(elem => <li>{elem}</li>)}
        </ul>       
        <ul style={{display:'inline-block'}}> Тыкай тут, что бы удалить строку
         {this.state.number.map((elem,ind,arr) => {
           return <li key={ind}><button  onClick={this.deleteStr}>Удали Меня</button></li>
         })}
        </ul>    
      </div>
      );
  }  
}

  


export default Code;
