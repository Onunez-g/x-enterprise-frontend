import { DOTS, usePagination } from "../../hooks/Pagination/usePagination";
import { PaginationProps } from "./Types";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Pagination = ({
  onPageChange,
  ...props
}: PaginationProps): JSX.Element => {
  const paginationRange = usePagination({ ...props, onPageChange });
  if (props.currentPage === 0 && paginationRange?.length < 2) {
    return <></>;
  }
  const onNext = () => {
    onPageChange(props.currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(props.currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`paginationContainer ${props.className}`}>
      <li
        className={`paginationItem ${
          props.currentPage === 1 ? "disabled" : ""
        }`}
        onClick={onPrevious}
      >
        <BsChevronLeft/>
      </li>
      {paginationRange.map((pageNumber, i) =>
        pageNumber === DOTS ? (
          <li key={i} className="paginationItem dots">&#8230;</li>
        ) : (
          <li
            key={i}
            className={`paginationItem ${
              pageNumber === props.currentPage ? "selected" : ""
            }`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        )
      )}
      <li
        className={`paginationItem ${
          props.currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={onNext}
      >
        <BsChevronRight/>
      </li>
    </ul>
  );
};

export default Pagination;
