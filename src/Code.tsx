import * as React from 'react';
import { Argument } from 'webpack';



interface CodeInputState {
  title ?: string;
  number?: Array<number>;
  
}

let array:any = [];


class Code extends React.Component<{}, CodeInputState>{
  constructor(props:string) {
    super(props);
    this.state = {
      title: ``,
      number: []
      }
  }
  showText = (event:any) => {
    let a = event.target.value;
    this.setState({
      title: a,
      number: array
    });
  }
  showArray = () => {
    this.setState({
      number: array.push(+this.state.title)
    })
     
    
    console.log(this.state.number)
    console.log(array)
  }
   
  render() {
  
    let sum:number = array.reduce((sum:number, current:number) => sum + current, 0)
    let mul:number = array.reduce((mul:number, current:number) => mul * current, 1)
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.showArray}>Calculation?</button>
        <input type ="number" className = "input-add" placeholder="Write number" onInput={this.showText}/>
        </header>
          <h3>{`Результат сложения ваших чисел равен: ${sum}`}</h3>
          <h3>{`Результат умножения ваших чисел равен: ${mul}`}</h3>
      </div>
      );

  }  
}


export default Code;

// let number: Array<number> = []

// let buttonClear = document.querySelector(".clear-button");
// let buttonAdd = document.querySelector(".b1")
// document.addEventListener ('keyup', function(event):void {
//     if (event.code === 'Enter' || event.code === 'NumpadEnter')  {
//             let val:string =(<HTMLInputElement> document.querySelector(".in1")).value;
//                  number.push(+val);
                
//             let sum = number.reduce((sum, current) => sum + current, 0)
//             let mul = number.reduce((mul, current) => mul * current, 1)
//             document.querySelector(".out").innerHTML = `Результат сложения ${sum}</br> Результат умножения ${mul}` 
//         }
// });
// document.addEventListener ('keyup', function(event):void {
//     if( event.code === 'Delete') {
//     return del();
//     }
//     function del () {
//         number = []
//         document.querySelector(".out").innerHTML = `Результат сброшен!`
//      }
// })