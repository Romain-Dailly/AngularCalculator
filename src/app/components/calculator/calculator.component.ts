import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { };

  numbers:string='';
  numbersInNumber:number=null;
  keyboardNumbers=[];
  operator:string='';
  result:number=null;
  displayAll:string='';
  operation:string='';

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
    this.numbersInNumber = Number(this.numbers);
    this.numbers='';
  };
  // Set the type of operator and call the method above
  setOperatorAndNumbers(operator:string){
    this.storeFirstNumber();
    this.operation+= `${this.numbersInNumber}${operator}`;
    this.numbersInNumber === this.result ?
    this.displayAll += ` ${operator}`:
    this.displayAll += ` ${this.numbersInNumber} ${operator}`;
  };
  // Get the second number and resolve operation, reset operator
  resolveOperation() {
    this.operation += `${Number(this.numbers)}`
    this.result=Number(eval(this.operation));
    this.displayAll += ` ${Number(this.numbers)} = [${this.result}]`;
    this.numbers= this.result.toString();
    console.log(this.operation);
    this.operation='';
  };
  // Reset all values
  reset() {
    this.numbers = '';
    this.operator='';
    this.numbersInNumber=null;
    this.displayAll = '';
    this.operation='';
  };
  // Delete last input number
  back(){
    Number(this.numbers)===this.result ? this.numbers = '':
    this.numbers= this.numbers.split('').slice(0,-1).join('');
  };

  ngOnInit() {
  };
};
