//Route defines different paths for URL and which components should be loaded for each route
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  //DOMAIN: localhost:3000
  //After deploying - mypage.com
  return (
    <Layout>
      {/*Use the path prop to say which URL ending should be shown when the component is on the screen 
      Routes JSX object ensures a component is only loaded when the URL matches the path prop exactly
            without Routes, it would load every component whose path is INCLUDED in the URL */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
