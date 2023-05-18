function CheckStringIsBalance(params: string): Boolean {
  const data: string[] = params.split("");

  /* check if input is 0 */
  if (data?.length === 0) return true;

  /* check if input length is not even or start with ")"" */
  if (data?.length % 2 !== 0 || data[0] === ")") return false;

  let dataOpen: string[] = [];
  let dataClose: string[] = [];

  for (let i = 0; i < data?.length; i++) {
    if (data[i] === "(") dataOpen.push(data[i]);
    else if (data[i] === ")") dataClose.push(data[i]);
  }

  return dataOpen.length === dataClose.length;
}
