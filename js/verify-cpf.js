export default function isCPF(field) {
  const cpf = field.value.replace(/\.|-/g, "");
  if (verifyLoopNums(cpf) || verifyFirstD(cpf) || verifySecondD(cpf)) {
    field.setCustomValidity(true);
  }
}

function verifyLoopNums(cpf) {
  const loopNums = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  return loopNums.includes(cpf);
}

function verifyFirstD(cpf) {
  let sum = 0;
  let mult = 10;

  for (let length = 0; length < 9; length++) {
    sum += parseInt(cpf.charAt(length)) * mult;
    mult--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }
  return sum != cpf[9];
}

function verifySecondD(cpf) {
  let sum = 0;
  let mult = 11;

  for (let length = 0; length < 10; length++) {
    sum += parseInt(cpf.charAt(length)) * mult;
    mult--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }
  return sum != cpf[10];
}
