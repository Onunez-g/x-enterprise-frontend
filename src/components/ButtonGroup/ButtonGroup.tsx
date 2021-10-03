import "./ButtonGroup.scss";
interface BtnGroupProps {
  items: (string | JSX.Element)[];
  mode?: "text" | "outline" | "filled";
  isActive?: number;
  onItemClick?: (value: any, index: number) => void;
  className?: string;
}

const ButtonGroup = (props: BtnGroupProps): JSX.Element => {
  return (
    <div className={`btnGroup ${props.className}`}>
      {props.items.map((x, i) => {
        let activeClassName = props.isActive === i ? "active" : "";
        return (
          <button
            onClick={() => props.onItemClick && props.onItemClick(x, i)}
            className={`${props.mode || "outline"} ${activeClassName}`}
            key={i}
          >
            {x}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
