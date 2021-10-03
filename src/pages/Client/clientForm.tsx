import { useHistory, useParams } from "react-router";
import { IoReturnDownBackOutline } from "react-icons/io5";
import FormFirstSide from "../../components/ClientForm/FormFirstSide";
import FormSecondSide from "../../components/ClientForm/FormSecondSide";

const ClientFormPage = (): JSX.Element => {
  let { id } = useParams<{ id: string }>();
  const { goBack } = useHistory();
  return (
    <div className="clientForm">
      <div className="clientFormContainer">
        <form>
          <div className="title">
            <h2>{id ? "Edit Client" : "Add Client"}</h2>
            <IoReturnDownBackOutline
              className="backBtn"
              size={22}
              onClick={goBack}
            />
          </div>
          {/* <FormFirstSide /> */}
          <FormSecondSide />
        </form>
      </div>
    </div>
  );
};

export default ClientFormPage;
