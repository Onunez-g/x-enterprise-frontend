import { useMemo, useState } from "react";
import { Header, Pagination } from ".";
import { TableProps } from "./Types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "../Modal/Modal";
import DeleteModal from "../Modal/DeleteModal";

const Table = (props: TableProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  const [page, setPage] = useState(1);
  let pageSize = props.pageSize || 10;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (page - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return props.datasource.slice(firstPageIndex, lastPageIndex);
  }, [page, props.datasource, pageSize]);

  const onSelect = (value: any, selectMode: "click" | "doubleClick") => {
    let selectionMode = props.selectionMode ?? "click";
    selectionMode === selectMode && props.onSelect && props.onSelect(value);
  };

  const onDelete = () => {
    props.onDelete && props.onDelete(selected)
    setOpen(false)
  }

  const renderData = () =>
    currentTableData.map((x, i) => (
      <tr
        key={i}
        onClick={() => onSelect(x, "click")}
        onDoubleClick={() => onSelect(x, "doubleClick")}
      >
        {props.columns.map((y) => (
          <td key={y.dataField}>
            {y.cellRender ? y.cellRender(x) : x[y.dataField]}
          </td>
        ))}
        {props.onEdit && (
          <td onClick={() => props.onEdit && props.onEdit(x)}>
            <AiFillEdit size={18} />
          </td>
        )}
        {props.onDelete && (
          <td
            onClick={() => {
              setOpen(true);
              setSelected(x);
            }}
          >
            <AiFillDelete size={18} color="#F33222" />
          </td>
        )}
      </tr>
    ));

  return (
    <>
      <table className={`table ${props.className}`}>
        <thead>
          <tr>
            <Header
              columns={props.columns}
              hasEdit={props.onEdit !== undefined}
              hasDelete={props.onDelete !== undefined}
            />
          </tr>
        </thead>
        <tbody>
          {props.datasource.length > 0 ? (
            renderData()
          ) : (
            <tr>
              <td className="emptyRow" colSpan={props.columns.length}>There are no records</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        totalCount={props.datasource.length}
        pageSize={pageSize}
        onPageChange={setPage}
        className="paginationBar"
      />
      <Modal isOpen={isOpen} onClose={setOpen} title="Delete" onOutsideClick>
        <DeleteModal setOpen={setOpen} onDelete={props.onDelete!} />
      </Modal>
    </>
  );
};

export default Table;
