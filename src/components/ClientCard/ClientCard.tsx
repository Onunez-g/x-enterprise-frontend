import { useState } from "react";
import { Client } from "../../entities/models/Client";
import DeleteModal from "../Modal/DeleteModal";
import Modal from "../Modal/Modal";
import "./ClientCard.scss";

interface ClientCardProps {
  client: Client;
  onView: (client: Client) => void;
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
}

const ClientCard = ({ client, ...props }: ClientCardProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="clientCard">
        <div className="row first">
          <h2>
            {client.name} {client.lastname}
          </h2>
          <button onClick={() => props.onView(client)} className="viewMore">
            View more
          </button>
        </div>
        <span className="identity">{client.identity}</span>
        <span className="email">{client.email}</span>
        <span className="phone">{client.phone}</span>
        <div className="row last">
          <button onClick={() => setOpen(true)} className="delete">
            Delete
          </button>
          <button onClick={() => props.onEdit(client)} className="edit">
            Edit
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="Delete" onOutsideClick>
        <DeleteModal setOpen={setOpen} onDelete={() => props.onDelete(client)}/>
      </Modal>
    </>
  );
};

export default ClientCard;
