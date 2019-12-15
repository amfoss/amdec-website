import { useState } from "react";
import dataFetch from "../utils/dataFetch";

const query = `
      mutation submitApplication($name: String!, $email: String!, $phone: String!, $formData: JSONString!){
      submitApplication(
        name: $name,
        email: $email,
        phone: $phone,
        formID: 5,
        formData: $formData
      )
      {
        id
      }
    }
`;

export const submitForm = async variables => dataFetch({ query, variables });

export const register = async (info, setErrorText, setSuccessText) => {
  const primaryData = ["name", "email", "phone"];
  const otherInfoKeys = Object.keys(info).filter(
    el => !primaryData.includes(el)
  );

  const otherInfo = otherInfoKeys.reduce(
    (obj, el) => ({ ...obj, [el]: info[el] }),
    {}
  );
  const { name, email, phone } = info;

  const variables = {
    name,
    email,
    phone,
    formData: JSON.stringify(otherInfo)
  };

  const { data, errors } = await submitForm(variables);

  if (Object.prototype.hasOwnProperty.call(data, "errors")) {
    setErrorText(errors[0].message);
  } else {
    setSuccessText(data.id);
    setErrorText("");
  }
};
