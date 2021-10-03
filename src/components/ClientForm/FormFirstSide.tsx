
const FormFirstSide = (): JSX.Element => {
  return (
    <>
      <div className="frontSide">
        <fieldset about="Basic Info">
          <legend>Basics</legend>
          <div className="formGroup">
            <label>
              Name:
              <input type="text" />
            </label>
            <label>
              Last name:
              <input type="text" />
            </label>
          </div>
          <div className="formGroup">
            <label>
              Identity type:
              <input type="text" />
            </label>
            <label>
              Identity:
              <input type="text" />
            </label>
          </div>
          <div className="formGroup">
            <label>
              Email:
              <input type="email" />
            </label>
            <label>
              Phone:
              <input type="tel" />
            </label>
          </div>
        </fieldset>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="continue">Continue</button>
        </div>
      </div>
    </>
  );
};

export default FormFirstSide;
