import ReactDOM from 'react-dom/client';
import Main from './Main';
import "./css/board.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Main />
);