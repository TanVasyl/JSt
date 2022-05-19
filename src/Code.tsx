import * as React from 'react';
import { Argument } from 'webpack';



interface CodeInputState {
  title ?: any;
  number?: Array<number>;
  
}

class Code extends React.Component<{}, CodeInputState>{
  constructor(props:string) {
    super(props);
    this.state = {
      title: '',
      number: []
      }
  }
  input = (event:any) => {
    this.setState ({
      title: event.target.value
    })
  }
  showArray = (input:any) => {
    this.setState({
      number:[...this.state.number, +this.state.title]
    })   
    console.log(this.state.number)
   
    
  }
  deleteResult = () => {
    this.setState({
      number: []
    })
  }

    
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showArray}>Считаем?</button>
        <input type ="number" className = "input-add" placeholder="Write number" onInput={this.input}/>
        <button onClick={this.deleteResult}>Обнуляем?</button>
       
        </header>
        <ul>Введеные чи
          {this.state.number.map(elem => {
            return <li>{elem}</li>
          })}
        </ul>
        <ul>Произведения чисел
          {
          this.state.number.map((elem,index,arr) => {
            return (
            <li key={elem.toString()}>
              {
            arr.reduce((prev, curr) => prev + curr, 0)
            }</li>
            )})}
        </ul>       
      
        <ul>Произведения чисел
          {
          this.state.number.map((elem,index,arr) => {
            return (
            <li key={elem.toString()}>
              {
            arr.reduce((prev, curr) => prev * curr, 1)
            }</li>
            )})}
        </ul> 
      </div>
      );
  }  
}

  


export default Code;
