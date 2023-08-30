export default function isOverAge(field) {
  const bornDate = new Date(field.value);
  if (!verifyAge(bornDate)) {
    field.setCustomValidity(true);
  }
}

function verifyAge(birthDate) {
  const dateToday = new Date();
  const date18 = new Date(
    birthDate.getUTCFullYear() + 18,
    birthDate.getUTCMonth(),
    birthDate.getUTCDate()
  );

  return dateToday >= date18;
}
