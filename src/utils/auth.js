import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

export const hasher = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const passwordValidator = async (password, hashedPassword) => {
  const isValidPassword = await compare(password, hashedPassword);
  return isValidPassword;
};

export const tokenGenrator = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenPrivateKey, {
    algorithm: "HS256",
    expiresIn: "15s",
  });
  return token;
};

export const verifyToken = (token) => {
  try {
    const payload = verify(token, process.env.AccessTokenPrivateKey);
    return payload;
  } catch (err) {
    console.log("Verify Access Token Error =>", err);
    return false;
  }
};

export const refreshTokenGenrator = (data) => {
  const token = sign({ ...data }, process.env.RefreshTokenPrivateKey, {
    algorithm: "HS256",
    expiresIn: "15d",
  });
  return token;
};

export const verifyRefreshToken = (token) => {
  try {
    const payload = verify(token, process.env.RefreshTokenPrivateKey);
    return payload;
  } catch (err) {
    console.log("Verify Refresh Token Error =>", err);
    return false;
  }
};

export const validateEmail = (email) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};

export const validatePhone = (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(phone);
};

export const validatePassword = (password) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};
