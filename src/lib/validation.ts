// Validaciones básicas de formularios
export const isEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const minLength = (value: string, length: number) => value.length >= length;

export const isPasswordStrong = (password: string) =>
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
