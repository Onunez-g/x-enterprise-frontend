import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Address, addressToString } from "../../entities/models/address";
import FormInput from "../FormInput/FormInput";
import { FormProps } from "./types";

const FormSecondSide = ({ value, ...props }: FormProps): JSX.Element => {
  let cleanAddress = {
    streetName: "",
    state: "",
    city: "",
    aptNumber: "",
    country: "",
    zipCode: "",
  };
  const [address, setAddress] = useState<Address>(cleanAddress);
  const [isOpen, setOpen] = useState(false);
  const onAddAddress = (e: any) => {
    e.preventDefault()
    if (!isOpen) setOpen(true);
    else {
      let addrs = value.addresses;
      addrs.push(address);
      props.setValue({ ...value, addresses: addrs });
      setAddress(cleanAddress);
    }
  };
  const onAddressChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target;
    setAddress({ ...address, [target.name]: target.value });
  };
  return (
    <>
      <div className={`secondSide ${props.className}`}>
        <fieldset about="Address">
          <legend>Addresses</legend>
          <div className="addresses">
            {value.addresses.map((x, i) => (
              <span key={i}>{addressToString(x)}</span>
            ))}
          </div>
          <div className="addressForm">
            {isOpen && (
              <>
                <AiOutlineClose
                  size={20}
                  onClick={() => setOpen(false)}
                  className="discardAddress"
                />
                <div className="formGroup">
                  <FormInput
                    value={address.city}
                    name="city"
                    label="City"
                    onChange={onAddressChanged}
                  />
                  <FormInput
                    value={address.state}
                    name="state"
                    label="State"
                    onChange={onAddressChanged}
                  />
                  <FormInput
                    value={address.country}
                    name="country"
                    label="Country"
                    onChange={onAddressChanged}
                  />
                </div>
                <div className="formGroup">
                  <FormInput
                    value={address.streetName}
                    name="streetName"
                    label="Street name"
                    onChange={onAddressChanged}
                  />
                  <FormInput
                    value={address.aptNumber}
                    name="aptNumber"
                    label="Apt #"
                    onChange={onAddressChanged}
                  />
                  <FormInput
                    value={address.zipCode}
                    name="zipCode"
                    label="Zip code"
                    onChange={onAddressChanged}
                  />
                </div>
              </>
            )}
            <div className="buttons">
              <button onClick={onAddAddress} className="addressBtn">
                {isOpen ? "Save" : "Add"} Address
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default FormSecondSide;
