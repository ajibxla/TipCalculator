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
    // this.reset();
    // this.final();
  }

  //   reset() {
  //     this.amountDisplay.innerText = "$0.00";
  //     this.totalDisplay.innerText = "$0.00";
  //     this.newTip = 0;
  //     this.billInput.value = "";
  //     this.peopleInput.value = "";
  //   }

  selectTip(item) {
    this.newTip = parseFloat(item) / 100;
    if (this.bill && this.peopleValue) {
      this.tipAmount = Math.round((this.bill * this.newTip) / this.peopleValue);
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
      this.totalAmount = Math.round(
        this.tipAmount + this.bill / this.peopleValue
      );
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    } else {
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
    }
  }

  customT(item) {
    this.custom = item / 100;
    if (this.bill && this.peopleValue) {
      this.tipAmount = Math.round((this.bill * this.custom) / this.peopleValue);
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
      this.totalAmount = Math.round(
        this.tipAmount + this.bill / this.peopleValue
      );
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    } else {
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
    }
  }

  updateBill() {
    this.bill = parseFloat(this.billInput.value);

    if (this.newTip && this.peopleValue) {
      this.tipAmount = Math.round((this.bill * this.newTip) / this.peopleValue);
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
      this.totalAmount = Math.round(
        this.bill / this.peopleValue + this.tipAmount
      );
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    } else {
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$0.00</p>`;
    }
    console.log(this.peopleValue);
  }

  updatePeople() {
    if (!isNaN(this.custom)) {
      this.peopleValue = parseFloat(this.peopleInput.value);

      this.tipAmount = Math.round((this.bill * this.custom) / this.peopleValue);
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
      this.totalAmount = Math.round(
        this.tipAmount + this.bill / this.peopleValue
      );
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    } else {
      this.peopleValue = parseFloat(this.peopleInput.value);

      this.tipAmount = Math.round((this.bill * this.newTip) / this.peopleValue);
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
      this.totalAmount = Math.round(
        this.tipAmount + this.bill / this.peopleValue
      );
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    }

    console.log(this.peopleValue);
  }

  isNan() {
    if (isNaN(this.tipAmount)) {
      this.tipAmount = `0.00`;
      this.amountDisplay.innerHTML = ` <p class="amount-display display-number">$${this.tipAmount}</p>`;
    }
    if (isNaN(this.totalAmount)) {
      this.totalAmount = `0.00`;
      this.totalDisplay.innerHTML = ` <p class="amount-display display-number">$${this.totalAmount}</p>`;
    }
  }
}

const billForm = document.querySelector(".bill-holder");
const peopleForm = document.querySelector(".people-holder");
const billInput = document.querySelector(".bill-input-text");
const peopleInput = document.querySelector(".people-input-text");

const tip = document.querySelectorAll(".tips");
const selectTips = document.querySelector(".tip-home");
const arrTips = Array.from(tip);
const customTip = document.querySelector(".custom-tip");
const amountDisplay = document.querySelector(".amount-display");
const totalDisplay = document.querySelector(".total-display");
const btn = document.querySelector("#btn");
const peopleSpan = document.querySelector(".people-span");
const header = document.querySelector(".select-tip");
const btns = header.getElementsByClassName("tips");

customTip.addEventListener("keyup", (e) => {
  let custom = parseInt(e.target.value);
  console.log(custom);
  calculateTip.customT(e);
});

const calculateTip = new TipCalculator(
  billForm,
  peopleForm,
  billInput,
  peopleInput,
  header,
  customTip,
  amountDisplay,
  totalDisplay,
  btn
);

btn.addEventListener("click", () => {
  location.reload();
});

billForm.addEventListener("keyup", (item) => {
  //   calculateTip.selectTip(item);
  calculateTip.updateBill();
  calculateTip.isNan();

  //   calculateTip.final(item);
});

peopleForm.addEventListener("keyup", (item) => {
  //   calculateTip.selectTip(item);

  calculateTip.updatePeople();
  calculateTip.isNan();

  let color = parseInt(item.target.value);

  if (color <= 0 || isNaN(color)) {
    peopleSpan.classList.add("negative-people");
    peopleInput.classList.add("negative-input");
  } else {
    peopleSpan.classList.remove("negative-people");
    peopleInput.classList.remove("negative-input");
  }
});

customTip.addEventListener("keyup", (e) => {
  calculateTip.customT(e);
});

tip.forEach((e) => {
  e.addEventListener("click", (e) => {
    calculateTip.selectTip(e.target.innerText);
    calculateTip.isNan();
  });
});

//swicth active class
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
