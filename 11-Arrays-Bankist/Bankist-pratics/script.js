'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account1 = {
  owner: 'Om Prakash',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jonas Schmedtmann',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
 
const time = formatAMPM(new Date);
 const now = new Date();
 const year = now.getFullYear();
 const month = now.getMonth() + 1 ;
 const date = now. getDate();
 const hour = now.getHours();
 const minute = now.getMinutes();


labelDate.textContent = `${year}/${month}/${date}, ${time}`

const displayMovements = function (movements) {
  // containerMovements.innerHTML = '';

  //const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(movements);

// Create User Name

const creatUserName = function(accs){
    accs.forEach(function(acc){
      acc.username = acc.owner.toLowerCase().split(' ').map(function(uname){
        return uname[0];
      }).join(''); 
      // console.log(accounts)
    });
};
creatUserName(accounts);

const calcDisplayBalance = (mov) => {
  const balance = mov.reduce((curr,mov) => curr + mov);
  labelBalance.textContent = `${balance} €`;
  };

const calcDisplaySummary = function(mov){
    const income = mov.filter(function(acc){
      return acc>0;
    });
    const incomeSum = income.reduce(function(curr,mov){
      return curr + mov;
    },0);
    labelSumIn.textContent = `${incomeSum} €`
    // console.log(incomeSum);
    //Out
    const out = mov.filter(function(acc){
      return acc<0;
    });
    const outSum = out.reduce(function(curr,mov){
      return curr + mov;
    },0);
    labelSumOut.textContent = `${Math.abs(outSum)} €`
   // console.log(Math.abs(outSum));

    const interest = mov.filter(function(acc){
      return acc> 0;
    });
    const intRate = interest.map(function(deposit){
     return (Math.round(deposit * 1.1) / 100);
    });
    const intSum = intRate.reduce(function(curr,int){
      return curr + int;
    });
    labelSumInterest.textContent = Math.round(intSum); 
}



////// EVENT LISTNER ////
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
     const currentAcc =  accounts.find(function(accs){
        return accs.username == inputLoginUsername.value;
      });

      const firstName = function(fname){
        return fname.split(' ')[0];
      }
      //console.log(currentAcc.pin);
      if(currentAcc.pin == Number(inputLoginPin.value)){
        calcDisplayBalance(currentAcc.movements);
        calcDisplaySummary(currentAcc.movements);
        labelWelcome.textContent = `Wel come back  ${firstName(currentAcc.owner)}`
        containerApp.style.opacity = 100;
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
      }
});

// setTimeout(function(){
//   console.log("ddddddd")
// },3000)
// setInterval(() => {
//   console.log(new Date());
// }, 2000);
/////////////////////////////////////////////////
