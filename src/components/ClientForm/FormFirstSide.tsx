import FormInput from "../FormInput/FormInput";
import { FormProps } from "./types";

const FormFirstSide = ({ value, ...props }: FormProps): JSX.Element => {
  const onValueChanged = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    props.setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={`frontSide ${props.className}`}>
        <fieldset about="Basic Info">
          <legend>Basics</legend>
          <div className="formGroup">
            <FormInput
              value={value.name}
              name="name"
              label="Name"
              onChange={onValueChanged}
            />
            <FormInput
              value={value.lastname}
              name="lastname"
              label="Last name"
              onChange={onValueChanged}
            />
          </div>
          <div className="formGroup">
            <label>
              Identity type:
              <select
                value={value.identityType}
                onChange={onValueChanged}
                name="identityType"
              >
                <option value="Id">Id</option>
                <option value="Passport">Passport</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <FormInput
              value={value.identity}
              name="identity"
              label="Identity"
              onChange={onValueChanged}
            />
          </div>
          <div className="formGroup">
            <FormInput
              value={value.email}
              name="email"
              label="Email"
              onChange={onValueChanged}
              type="email"
            />
            <FormInput
              value={value.phone}
              name="phone"
              label="Phone"
              onChange={onValueChanged}
              type="tel"
            />
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default FormFirstSide;
