import { DeleteModalProps } from "./types";

const DeleteModal = ({setOpen, onDelete}: DeleteModalProps) => {
  return (
    <div className="deleteModal">
      Are you sure you want to delete this client?
      <div className="buttons">
        <button onClick={() => setOpen(false)} className="cancelBtn">
          Cancel
        </button>
        <button className="deleteBtn" onClick={onDelete}>
          Delete client
        </button>
      </div>
    </div>
  );
};

export default DeleteModal