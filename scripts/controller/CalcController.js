class CalcController {

  constructor(){
    this._displayCalc = '0'
    this._currentDate;
    this.initialize()
  }

  initialize(){

    let displayCalcEl = document.querySelector('#display')
    let dateEl = document.querySelector('#data')
    let timeEl = document.querySelector('#hora')

    displayCalcEl.innerHTML = "4567";
    dateEl.innerHTML = "18/03/2025"
    timeEl.innerHTML = "07:14"
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(value){
    this._displayCalc = value;
  }

  get currentDate(){
    return this._currentDate
  }

  set currentDate(value){
    this._displayCalc = value;
  }

}