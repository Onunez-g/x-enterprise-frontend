import { useEffect, useMemo, useState } from "react";
import { Table } from "../../components/Table";
import { getClients } from "../../data/fakeData";
import { Client } from "../../entities/models/Client";
import { Columns } from ".";
import { useHistory } from "react-router";
import Toolbar from "../../components/Toolbar/index";
import DataViewer from "../../components/DataViewer/DataViewer";
import ClientCard from "../../components/ClientCard/ClientCard";
import ClientService from "../../services/client/ClientService";

const ClientPage = (): JSX.Element => {
  const { push } = useHistory();
  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");
  const [isList, setIsList] = useState(0);

  const getClients = () => {
    ClientService.GetClients().then((res) => setClients(res));
  }
  useEffect(() => getClients(), []);

  const currentDataSource = useMemo(() => {
    if (!search) return clients;
    return clients.filter((x) => x.name.includes(search));
  }, [search, clients]);

  const onItemClick = (value: any, index: number) => {
    setIsList(index);
  };
  const onSearch = (value: string) => {
    setSearch(value);
  };
  const onAddClient = () => {
    push("/add");
  };
  const onEditClient = (value: Client) => {
    push(`/edit/${value._id}`);
  };
  const onDeleteClient = (value: Client) => {
    ClientService.DeleteClient(value._id)
    .then(() => getClients())
  };
  const onViewClient = (value: Client) => {
    push(`/view/${value._id}`)
  };
  return (
    <>
      <div className="clientContainer">
        <Toolbar
          onAddClient={onAddClient}
          isList={isList}
          onItemClick={onItemClick}
          onSearchChanged={onSearch}
        />
        {isList === 0 ? (
          <Table
            datasource={currentDataSource}
            columns={Columns}
            className="clientTable"
            onEdit={onEditClient}
            onDelete={onDeleteClient}
            onSelect={onViewClient}
            selectionMode="doubleClick"
          />
        ) : (
          <DataViewer
            dataSource={currentDataSource}
            renderCard={(client: Client) => (
              <ClientCard
                onDelete={onDeleteClient}
                onView={onViewClient}
                onEdit={onEditClient}
                client={client}
              />
            )}
          />
        )}
      </div>
    </>
  );
};

export default ClientPage;
