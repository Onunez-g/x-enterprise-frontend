import { useHistory, useParams } from "react-router";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FormFirstSide, FormSecondSide } from "../../components/ClientForm";
import React, { useEffect, useMemo, useState } from "react";
import { ClientDto } from "../../entities/dto/ClientDto";
import ClientService from "../../services/client/ClientService";

const ClientFormPage = (): JSX.Element => {
  let { id } = useParams<{ id: string }>();
  const [hasContinued, setContinue] = useState(false);
  const [client, setClient] = useState<ClientDto>({
    name: "",
    lastname: "",
    identity: "",
    identityType: "Id",
    email: "",
    phone: "",
    addresses: [],
  });
  const { goBack, replace } = useHistory();
  useEffect(() => {
    if (id) {
      ClientService.GetClientById(id).then((res) => setClient(res));
    }
  }, [id]);
  const onSubmit = (e: any) => {
    e.preventDefault()
    if(!hasContinued) {
      setContinue(true)
      return
    }
  }
  return (
    <div className="clientForm">
      <div className="clientFormContainer">
        <form onSubmit={onSubmit}>
          <div className="title">
            <h2>{id ? "Edit Client" : "Add Client"}</h2>
            <IoReturnDownBackOutline
              className="backBtn"
              size={22}
              onClick={goBack}
            />
          </div>
          {hasContinued ? (
            <FormSecondSide
              value={client}
              setValue={setClient}
            />
          ) : (
            <FormFirstSide
              value={client}
              setValue={setClient}
            />
          )}
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                replace('/')
              }}
              className="cancel"
            >
              Cancel
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setContinue(false);
              }}
              className="previous"
            >
              Previous
            </button>
            <button type="submit" className="submit">
              {hasContinued ? "Save" : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientFormPage;
