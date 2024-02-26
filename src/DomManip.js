import ReactDOM from "react-dom/client";

export function replace(title, data) {
  let messageBoard = ReactDOM.createRoot(document.getElementById("messages"));
  messageBoard.render(
    <>
      <h3>{title}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
