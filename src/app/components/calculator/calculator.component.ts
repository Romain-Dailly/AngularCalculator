import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  constructor() { };

  numbers:string='';
  firstNumber:number=null;
  secondNumber:number=null;
  keyboardNumbers=[];
  operator:string='';
  result:number=null;
  displayAll:string='';

  //Set an array with 9 numbers
  setkeyBoardNumbers(){
    for (let i =0; i<10; i ++) {
      this.keyboardNumbers = [...this.keyboardNumbers, i];
    };
  };
  // Set the numbers displayed in input
  setDisplayNumber(value) {
    this.result != null ?
    (this.numbers ='', this.result=null, this.numbers += `${value}`):
    this.numbers += `${value}`;
  };
  setDecimal() {
    this.numbers.split('').indexOf('.')===-1 ?
    this.numbers += '.':
    null;
  };
  // Store the displayed first value
  storeFirstNumber() {
    this.firstNumber=Number(this.numbers);
    this.numbers='';
  };
  // Set the type of operator and call the method above
  setOperatorAndNumbers(operator:string){
    this.operator = operator;
    this.storeFirstNumber();
    this.firstNumber === this.result ?
    this.displayAll +=' ' + operator :
    this.displayAll += ` ${this.firstNumber} ${operator}`;
  };
  // Get the second number and resolve operation, reset operator
  resolveOperation() {
    this.secondNumber = Number(this.numbers);
    this.operator === '+'?
    this.result = this.firstNumber + this.secondNumber :
    this.operator === '-' ?
    this.result = this.firstNumber - this.secondNumber :
    this.operator === '*' ?
    this.result = this.firstNumber * this.secondNumber :
    this.operator === '/' ?
    this.result = this.firstNumber / this.secondNumber :
    this.result = Number(this.numbers);
    this.displayAll += ` ${this.secondNumber} = [${this.result}]`;
    this.numbers= this.result.toString();
    this.operator='';
  };
  // Reset all values
  reset() {
    this.numbers = '';
    this.operator='';
    this.firstNumber=null;
    this.secondNumber=null;
    this.displayAll = '';
  };
  // Delete last input number
  back(){
    let newN = this.numbers.split('');
    newN=newN.slice(0,-1);
    this.numbers= newN.join('');
  };

  ngOnInit() {
    this.setkeyBoardNumbers();
  };
};
