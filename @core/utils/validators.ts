const validators = {
  name: (value: string) =>
    /^[A-Za-z\s]{2,}$/.test(value)
      ? ""
      : "Name must contain only letters (min 2)",
  service: (value: string) =>
    /^[A-Za-z\s]{2,}$/.test(value)
      ? ""
      : "Service must contain only letters (min 2)",
  firstName: (value: string) =>
    /^[A-Za-z]{2,}$/.test(value)
      ? ""
      : "First name must contain only letters (min 2)",

  lastName: (value: string) =>
    /^[A-Za-z]{2,}$/.test(value)
      ? ""
      : "Last name must contain only letters (min 2)",



  email: (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Enter a valid email address",

  phone: (value: string) =>
    /^\d{10,15}$/.test(value) ? "" : "Enter a valid phone number",

  // website: (value: string) =>
  //   value.trim() === "" ||
  //   /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(value.trim())
  //     ? ""
  //     : "Enter a valid website URL",

  website: (value: string) => {
    if (!value.trim()) return "Website is required";

    const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;

    if (!pattern.test(value.trim())) {
      return "Enter a valid website URL";
    }

    return "";
  },

  description: (value: string) =>
    value.trim().length >= 10
      ? ""
      : "Description must be at least 10 characters long",

  captcha: (value: boolean | string) =>
    value
      ? ""
      : "Please verify that you are not a robot",
};
export default validators;
