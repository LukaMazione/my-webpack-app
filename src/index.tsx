import { createRoot } from 'react-dom/client';
import './index.scss';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <div id='container'>
    <h1>Hello World!</h1>
  </div>,
); // to jest JSX a nie HTML!
// Rolą babel i wtyczki preset jest tansformacja tego zapisu na JS
// Każdy plik korzystający z tej skłądni musi importować React
