import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UseCallbackExample from './useCallback/UseCallbackExample';
import UseMemoExample from './useMemo/UseMemoExample';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="memo">useMemo</Link>
        <Link to="callback">callBack</Link>
      </div>
      <Routes>
        <Route path="/memo" element={<UseMemoExample />} />
        <Route path="/callback" element={<UseCallbackExample />} />
      </Routes>
    </div>
  );
}

export default App;
