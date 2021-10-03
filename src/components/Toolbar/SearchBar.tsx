import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface SearchBarProps {
  placeholder?: string
  value?: string
  onValueChanged?: (e: string) => void
  hasSearchBtn?: true
  iconColor?: string
  searchClassName?: string
  searchBtnClassName?: string
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  return (
    <div className={`searchBar ${props.searchClassName}`}>
      <BsSearch color={props.iconColor ?? "#000"}/>
      <input
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        name="searchBar"
        onChange={(e) => props.onValueChanged && props.onValueChanged(e.target.value)}
      />
      <AiOutlineClose onClick={() => props.onValueChanged && props.onValueChanged("")} className={props.value ? "visible": "hidden"}/>
    </div>
  );
};

export default SearchBar;
