// import { Fragment } from "react";

import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   let selectedIndex = 0;

  //HOOK
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const [name, setName] = useState("");

  //   items = [];

  //   const message = items.length === 0 ? <p>No items found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No items found</p>
  //       </>
  //     );

  //event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // <Fragment>
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
{
  /* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */
}
