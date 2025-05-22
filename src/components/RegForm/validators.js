export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const checkPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const checkRequired = (f) => {
  return f.every((field) => field.trim());
};
