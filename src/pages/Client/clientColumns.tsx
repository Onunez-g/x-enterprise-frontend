import { Column } from "../../components/Table/Types";
import { Client } from "../../entities/models/Client";

export const columns: Column[] = [
  {
    dataField: "name",
    caption: "Name",
  },
  {
    dataField: "lastName",
    caption: "Last name",
  },
  {
    dataField: "identifier",
    caption: "Identity",
  },
  {
    dataField: "phone",
    caption: "Phone",
  },
  {
    dataField: "email",
    caption: "Email",
  },
  {
    dataField: "addresses",
    caption: "Addresses",
    cellRender: (data: Client) => {
      return <span>{data.adresses[0].addressToString()}...</span>;
    },
  },
];

export default columns;
