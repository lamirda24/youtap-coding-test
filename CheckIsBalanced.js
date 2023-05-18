function CheckStringIsBalance(params) {
  var data = params.split("");
  /* check if input is 0 */
  if ((data === null || data === void 0 ? void 0 : data.length) === 0)
    return true;
  /* check if input length is not even or start with ")"" */
  if (
    (data === null || data === void 0 ? void 0 : data.length) % 2 !== 0 ||
    data[0] === ")"
  )
    return false;
  var dataOpen = [];
  var dataClose = [];
  for (
    var i = 0;
    i < (data === null || data === void 0 ? void 0 : data.length);
    i++
  ) {
    if (data[i] === "(") dataOpen.push(data[i]);
    else if (data[i] === ")") dataClose.push(data[i]);
  }
  return dataOpen.length === dataClose.length;
}
var inputs = "(()()(()))";
var runChecking = CheckStringIsBalance(inputs);
console.log(runChecking);
