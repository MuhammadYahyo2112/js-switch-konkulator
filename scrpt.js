let a = Number(prompt("1-soni kriting"));
let b = Number(prompt("2-soni kriting"));
let amal = prompt("Amalni kiriting \n +\n -\n *\n /");

let h1 = document.querySelector("h1");
let body = document.body;

switch (amal) {
  case "+":
    h1.innerHTML = `${a} + ${b} = ${a + b}`;
    body.appendChild(h1);
    alert(a + b);
    break;

  case "-":
    h1.innerHTML = `${a} - ${b} = ${a - b}`;
    body.appendChild(h1);
    alert(a - b);
    break;

  case "*":
    h1.innerHTML = `${a} * ${b} = ${a * b}`;
    body.appendChild(h1);
    alert(a * b);
    break;

  case "/":
    if (b !== 0) {
      h1.innerHTML = `${a} / ${b} = ${a / b}`;
      body.appendChild(h1);
      alert(a / b);
    } else {
      alert("0 ga bo'lish mumkin emas");
    }
    break;

  default:
    alert("Noto'g'ri amal kiritildi");
}
