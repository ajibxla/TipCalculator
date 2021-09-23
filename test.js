// // let zeroText = document.querySelector(".zero-text");
// // let negativePeople = document.querySelector(".negative-people");
// // let zeroInput = document.querySelector(".zero-input");
// // let form = document.querySelector(".form2");
// // let form2 = document.querySelector(".input-holder");
// // let input = document.querySelector(".input-text");
// // let btn = document.querySelector("#btn");

// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   const value = parseInt(zeroInput.value);
// //   if (value <= 0) {
// //     zeroText.classList.add("negative-people");
// //     zeroInput.classList.add("negative-input");
// //   } else {
// //     zeroText.classList.remove("negative-people");
// //     zeroInput.classList.remove("negative-input");
// //   }

// //   console.log(value);
// // });

// // form2.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   const inputValue = parseInt(input.value);
// //   console.log(inputValue);
// //   input.style.color = "#00474b";
// // });

// // btn.addEventListener("click", () => {
// //   inputValue = "";
// //   zeroInput = "";
// //   console.log(value);
// // });

class TipCalculator {
  constructor(
    billForm,
    peopleForm,
    billInput,
    peopleInput,
    tipPercent,
    customTip,
    amountDisplay,
    totalDisplay,
    btn,
    tip
  ) {
    this.billForm = billForm;
    this.peopleForm = peopleForm;
    this.billInput = billInput;
    this.peopleInput = peopleInput;
    this.tipPercent = tipPercent;
    this.customTip = customTip;
    this.amountDisplay = amountDisplay;
    this.totalDisplay = totalDisplay;
    this.btn = btn;
    this.tip = tip;
    this.reset();
    this.final();
  }

  reset() {
    this.amountDisplay.innerText = "$0.00";
    this.totalDisplay.innerText = "$0.00";
    this.billInput.value = this.billInput.defaultValue;
    this.peopleInput.value = this.peopleInput.defaultValue;
  }

  updateBill(e) {
    this.bill = parseFloat(this.billInput.value);
    return this.bill;
  }

  updatePeople(e) {
    let people = this.peopleInput.value;
    this.peopleValue = parseFloat(people);
    if (isNaN(this.peopleValue)) return 1;
    return this.peopleValue;
  }

  //   calcTip(e) {
  //     this.e = e;
  //     this.newTip = parseFloat(e) / 100;
  //     return this.newTip;
  //   }

  final(e) {
    let newBill = this.updateBill();
    let newPeople = this.updatePeople();
    this.e = e;
    this.newTip = parseFloat(e) / 100;
    // return this.newTip
    this.tipAmount = Math.round((newBill * this.newTip) / newPeople);
    this.totalAmount = Math.round(this.tipAmount + newBill / newPeople);
    if (isNaN(this.tipAmount)) {
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
    } else {
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
    }

    if (isNaN(this.totalAmount)) {
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
    } else {
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    }
  }

  //   calcTip(tip) {
  //     this.newTip = parseInt(tip) / 100;
  //     this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${
  //       (this.newTip * bi) / parseFloat(this.peopleInput.value)
  //     }</p>`;
  //     //       (this.billValue + this.newPeople) / this.tip;
  //     this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${
  //       (this.newTip * parseFloat(this.billInput.value)) /
  //       parseFloat(this.peopleInput.value)
  //     }</p>`;
  //   }

  //   calcTotal() {
  //     this.newTip *= parseFloat(this.billInput.value);
  //     this.totalDisplay.innerHTML = `<p class="amount-display display-number">$${
  //       (this.newTip + parseFloat(this.billInput.value)) /
  //       parseFloat(this.peopleInput.value)
  //     }</p>`;
  //   }

  custom(e) {
    // console.log(parseFloat(this.customTip.innerText));
    // if (this.parseFloat(this.customTip.value) >= 0) {
    //   this.newTip = this.parseFloat(this.customTip.value);
    //   this.newTip = parseInt(tip) / 100;
    //   //       (this.billValue + this.newPeople) / this.tip;
    //   this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${
    //     (this.newTip * parseFloat(this.billInput.value)) /
    //     parseFloat(this.peopleInput.value)
    //   }</p>`;
    //   this.newTip *= parseFloat(this.billInput.value);
    //   this.totalDisplay.innerHTML = `<p class="amount-display display-number">$${
    //     (this.newTip + parseFloat(this.billInput.value)) /
    //     parseFloat(this.peopleInput.value)
    //   }</p>`;
    // }

    // this.customTip = parseInt(this.customTip);
    // console.log(this.customTip);

    this.customTip = parseFloat(this.customTip.value);
  }

  //   displayTipAmount() {
  //     this.tipAmount = this.billValue * this.newTip;
  //     console.log(this.tipAmount);
  //     console.log(parseFloat(this.billInput.value));
  //     console.log(this.newTip);
  //   }
}

const billForm = document.querySelector(".bill-holder");
const peopleForm = document.querySelector(".people-holder");
const billInput = document.querySelector(".bill-input-text");
const peopleInput = document.querySelector(".people-input-text");
const tipPercent = document.querySelectorAll(".select-tip button");
const tip = document.querySelectorAll(".tips");
const arrTips = Array.from(tip);
const customTip = document.querySelector(".custom-tip");
const amountDisplay = document.querySelector(".amount-display");
const totalDisplay = document.querySelector(".total-display");
const btn = document.querySelector("#btn");
const peopleSpan = document.querySelector(".people-span");

const calculateTip = new TipCalculator(
  billForm,
  peopleForm,
  billInput,
  peopleInput,
  tipPercent,
  customTip,
  amountDisplay,
  totalDisplay,
  btn
);

btn.addEventListener("click", (e) => {
  calculateTip.reset(e);
});

billForm.addEventListener("keyup", (e) => {
  calculateTip.final(e);
});

peopleForm.addEventListener("keyup", (e) => {
  //   e.preventDefault();
  //   calculateTip.updatePeople();
  //   if (peopleInput.value <= 0) {
  //     peopleSpan.classList.add("negative-people");
  //     peopleInput.classList.add("negative-input");
  //   } else {
  //     peopleSpan.classList.remove("negative-people");
  //   }
  calculateTip.final(e);
});

// tipPercent.forEach((tip) => {
//   tip.addEventListener("click", (e) => {
//     calculateTip.calcTip(e.target.innerText);
//     calculateTip.final(e);
//     console.log(e.target.innerText);
//     // calculateTip.calcTotal();
//     // calculateTip.displayTipAmount();
//   });
// });

tip.forEach((e) => {
  e.addEventListener("click", (e) => {
    // calculateTip.calcTip(e.target.innerText);
    calculateTip.final(e.target.innerText);
  });
});

customTip.addEventListener("click", (e) => {
  e.preventDefault();
  calculateTip.custom(e.target);
});
