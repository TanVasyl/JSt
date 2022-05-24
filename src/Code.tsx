import * as React from 'react';
import { Argument} from 'webpack';



interface CodeInputState {
  title ?: any;
  number?: Array<number>;
  sum?:Array<number>  ;
  mul?:Array<number>;
}

class Code extends React.Component<{}, CodeInputState>{
  constructor(props:string) {
    super(props);
    this.state = {
      title: '',
      number: [],
      sum: [],
      mul: []
      }
  }
  input = (event:any) => {
    this.setState ({
      title: event.target.value
    })
  }
  showArray = () => {
    this.setState({
      number: this.state.number.concat(+this.state.title), 
      sum: this.state.number.concat(this.state.number.reduce((prev,curr)=> prev+curr, +this.state.title)),
      mul: this.state.number.concat(this.state.number.reduce((prev,curr)=> prev*curr, +this.state.title)),
      })   
   
    console.log(this.state.sum)
  }
  deleteResult = () => {
    this.setState({
      number: [],
      sum: [],
      mul: []
    })
  }
  deleteStr = () => {
    this.setState({
      number:this.state.number.slice(1),
      // sum:  [...this.state.sum, this.state.number.slice(1).reduce((prev,curr) => prev+curr, +this.state.title)]
    })
    // console.log(this.state.number)
    console.log(this.state.sum)
  }
    
  

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showArray}>Считаем?</button>
        <input type ="number" className = "input-add" placeholder="Write number" onInput={this.input}/>
        <button onClick={this.deleteResult}>Обнуляем?</button>
       
        </header>
        <ul style={{display:'inline-block'}}>Введеные числа
          {this.state.number.map(elem => {
            return <li>{elem}</li>
          })}
        </ul>
        <ul style={{display:'inline-block'}}>Сумма чисел
        {this.state.sum.map((elem,ind,arr) => {
            return <li>{this.state.number.reduce((prev,curr) => prev+curr,0)}</li>
          })}
        </ul>       
        <ul style={{display:'inline-block'}}>Произведение чисел
        {this.state.mul.map((elem,ind,arr) => {
            return <li>{this.state.number.reduce((prev,curr) =>  prev*curr,1)}</li>
          })}
        </ul>
        <ul style={{display:'inline-block'}}> Тыкай тут, что бы удалить строку
         {this.state.number.map( () => {
           return <li><button onClick={this.deleteStr}>Удали Меня</button></li>
         })}
        </ul>    
      </div>
      );
  }  
}

  


export default Code;
