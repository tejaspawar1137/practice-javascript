// Understanding Closure and Lexical Scope in javascript

// 1) Lexical Scope

// Lexical scope means a function can access variables from its parent scope
// javascript determines variables access based on where functions are defined not
// where they have called

// * Example 1: Lexical Scope

function outerFunction() {
  let outerVal = "I'm from outer";

  function innerFunction() {
    console.log(outerVal);
  }
  innerFunction();
}
outerFunction();

// * Explination inner function can access outerFunction because it's defined outer function
// * function inherit the scope of their parent scope

// ! Closure
// a closure when a function remembers variables from it's outer scope after the outer
// function has finished executing

// * Example 2 Closure

function createCount() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCount();
counter();
counter();
counter();
counter();

// * Explination
// 1) createCounter() returns a function which retains access to count even after
// createCount() has executed
// 2) the returned function forms a closure, allowing count to persist

// ? why we should use closure

// closures are useful for
// * 1) Data privacy: prevent direct modification of variables
// * 2) Creating functions with persisting state => Counter, Caching
// * 3) Event Handlers and callbacks => Closure helps retain state

// ? Closure in  real world use cases

function createBankBalance(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited Amount ${amount} New Balance ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient Balance");
        return;
      }
      balance -= amount;
      console.log(`Withdraw amount ${amount} Remaining Balance${balance}`);
    },
  };
}

const myAccount = createBankBalance(100);
myAccount.deposit(30); // deposited: 30, new balance $130
myAccount.withdraw(70); // withdrawn 60, new balance $70
myAccount.withdraw(60) // withdrawn 80, Insufficient balance cause not enough balance to withdraw 
myAccount.balance // undefined cannot access directly 


// ? Explination 
// * balance is private and cannot by modified directly 
// * only deposit() and withdraw() can access balance, ensuring data privary 


// ! Lexical Scope Vs Closure (Exact difference );

// * 1) Lexical Scope: 
// ? Lexical scope means that a function can access variables from its own scope 
// ? parent scope and so on up the scope chain. the scope is determined at the time 
// ? the code is written (not when it runs )

// * 2) Closure:
// a closure is when a function remembers and keeps access to variables from it's 
// lexical scope, even after the parent functio has finished execution

// ? Key difference 

// * 1)   Lexical scope defines what variables a function can access based on 
// where it is written 
// * 2) Closure is a mechanism that allows a function to retain access to its lexical 
// scope even when it is executed outside of the scope;