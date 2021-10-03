import { useState } from "react";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
import { SearchBar } from ".";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import "./Toolbar.scss";
interface ToolbarProps {
  onAddClient: () => void;
  isList: number;
  onItemClick: (value: any, index: number) => void;
  onSearchChanged?: (value: string) => void;
  searchPlaceholder?: string;
}

const Toolbar = (props: ToolbarProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const onSearch = (value: string) => {
    setSearch(value);
    props.onSearchChanged && props.onSearchChanged(value);
  };
  return (
    <div className="toolbar">
      <button onClick={props.onAddClient} className="addBtn draw-border">
        Add Client
      </button>
      <SearchBar
        value={search}
        onValueChanged={onSearch}
        placeholder={props.searchPlaceholder ?? "Search..."}
        searchClassName="toolbarSearch"
      />
      <ButtonGroup
        className="listView"
        mode="text"
        items={[<BsListUl size={18} />, <BsFillGridFill size={18} />]}
        isActive={props.isList}
        onItemClick={props.onItemClick}
      />
    </div>
  );
};

export default Toolbar;
