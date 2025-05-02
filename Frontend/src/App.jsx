import './App.css';
import { AnimatePresence } from 'framer-motion';
import Home from './Pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <AnimatePresence>
        <Home />
      </AnimatePresence>
    </div>
  );
}

export default App;