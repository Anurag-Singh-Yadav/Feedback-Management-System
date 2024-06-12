import { Provider } from "react-redux";
import store from "./redux/store";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";
import { Footer } from "./components/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Provider store={store}>
        <div className="min-h-screen">
          <div className="container mx-auto p-4 max-w-screen-md">
            <h1 className="text-4xl font-extrabold font-serif mb-8 text-center">
              Feedback App
            </h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FeedbackForm />
              <FeedbackList />
            </div>
          </div>
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
