import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DeleteModal from "../../components/Modal/DeleteModal";
import Modal from "../../components/Modal/Modal";
import { Table } from "../../components/Table";
import { Client } from "../../entities/models/Client";
import ClientService from "../../services/client/ClientService";
import { addressColumns } from "./clientColumns";

const ClientDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { push, replace, goBack } = useHistory();
  const [client, setClient] = useState<Client>();
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    ClientService.GetClientById(id).then((res) => setClient(res));
  }, [id]);
  const onEdit = () => {
    push(`/edit/${id}`);
  };
  const onDelete = () => {
    ClientService.DeleteClient(id).then(() => replace("/"));
  };
  return (
    <>
      <div className="viewDetails">
        <div className="clientViewContainer">
          <div className="firstRow">
            <div className="idName">
              <h2 className="name">{`${client?.name} ${client?.lastname}`}</h2>
              <h3 className="identity">{client?.identity}</h3>
            </div>
            <div className="buttons">
              <button onClick={goBack} className="back">go back</button>
              <button onClick={onEdit} className="edit">
                Edit
              </button>
            </div>
          </div>
          <div className="contactRow">
            <h3>Contact</h3>
            <p>
              <span>Phone:</span> {client?.phone}
            </p>
            <p>
              <span>Email:</span> {client?.email}
            </p>
          </div>
          <div className="addresses">
            <Table
              pageSize={5}
              datasource={client?.addresses || []}
              columns={addressColumns}
            />
          </div>
          <button onClick={() => setOpen(true)} className="delete">Delete</button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Delete"
        onOutsideClick
      >
        <DeleteModal setOpen={setOpen} onDelete={onDelete} />
      </Modal>
    </>
  );
};

export default ClientDetails;
