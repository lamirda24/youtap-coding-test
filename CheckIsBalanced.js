"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CheckStringIsBalance(params) {
  let data = params.split("");
  /* check if input is 0 */
  if ((data === null || data === void 0 ? void 0 : data.length) === 0)
    return true;
  /* check if input length is not even or start with ")"" */
  if (
    (data === null || data === void 0 ? void 0 : data.length) % 2 !== 0 ||
    data[0] === ")"
  )
    return false;
  let dataOpen = [];
  let dataClose = [];
  for (
    let i = 0;
    i < (data === null || data === void 0 ? void 0 : data.length);
    i++
  ) {
    if (data[i] === "(") dataOpen.push(data[i]);
    else if (data[i] === ")") dataClose.push(data[i]);
  }
  return dataOpen.length === dataClose.length;
}

let inputs = "()()";
let doChecking = CheckStringIsBalance(inputs);
console.log(doChecking);
