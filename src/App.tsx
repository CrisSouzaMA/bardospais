import { Header } from './Components/Header/Header';
import { AppRouter } from './routes/AppRouter';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
