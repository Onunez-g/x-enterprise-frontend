import { AiOutlineClose } from "react-icons/ai";

const FormSecondSide = (props: any): JSX.Element => {
  return (
    <>
      <div className="secondSide">
        <fieldset about="Address">
          <legend>Addresses</legend>
          <div className="addressForm">
            <AiOutlineClose className="discardAddress" />
            <div className="formGroup">
              <label>
                City:
                <input type="text" />
              </label>
              <label>
                State:
                <input type="text" />
              </label>
              <label>
                Country:
                <input type="text" />
              </label>
            </div>
            <div className="formGroup">
              <label>
                Street Name:
                <input type="text" />
              </label>
              <label>
                Apt #:
                <input type="text" />
              </label>
              <label>
                Zip Code:
                <input type="text" />
              </label>
            </div>
            <div className="buttons">
              <button className="addressBtn">Save Address</button>
            </div>
          </div>
        </fieldset>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="previous">Previous</button>
          <button className="submit">Continue</button>
        </div>
      </div>
    </>
  );
};

export default FormSecondSide;
