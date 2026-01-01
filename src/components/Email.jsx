import React from "react";

const Email = () => {
  const email = "alexei@gmail.com";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const check = emailRegex.test(email);

  return check ? email : null;
};

export default Email;
