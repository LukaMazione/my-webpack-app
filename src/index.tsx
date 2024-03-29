import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';

const container = document.querySelector('#root');
const root = createRoot(container);

// root.render(
//   <div id='container'>
//     <h1>Hello World!</h1>
//   </div>,
// );

// Następuje tu podmianka pliku renderowanego na sztywno 
// z główną apką
root.render(<App />);
