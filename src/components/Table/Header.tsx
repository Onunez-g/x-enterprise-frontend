import { Column } from "./Types";

interface HeaderProps {
  columns: Column[]
  hasEdit: boolean
  hasDelete: boolean
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <>
      {props.columns.map((x) => (
        <th key={x.dataField}>{x.caption || x.dataField}</th>
      ))}
      {props.hasEdit && <th></th>}
      {props.hasDelete && <th></th>}
    </>
  );
};

export default Header;
