import "./DataViewer.scss";
import { DataViewProps } from "./types";

const DataViewer = (props: DataViewProps): JSX.Element => {
  return (
    <>
      <div className="dataView">
        {props.dataSource.map((x: any) => (
          <div className="item" key={x.id}>
            {props.renderCard(x)}
          </div>
        ))}
      </div>
    </>
  );
};

export default DataViewer;
