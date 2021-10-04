import { Column } from "../../components/Table/Types";
import { addressToString } from "../../entities/models/address";
import { Client } from "../../entities/models/Client";

export const columns: Column[] = [
  {
    dataField: "name",
    caption: "Name",
  },
  {
    dataField: "lastname",
    caption: "Last name",
  },
  {
    dataField: "identity",
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
      let address = data.addresses ? addressToString(data.addresses[0]) : "No address registered";
      return <span>{address}...</span>;
    },
  },
];

export default columns;
