import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';
import AddArticle from './pages/Dashboard/AddArticle';
import EditArticle from './pages/Dashboard/EditArticle';
import ArticleList from './pages/Dashboard/ArticleList.tsx';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articleList" element={<ArticleList />} />
        <Route path="/articleEdit/:code" element={<EditArticle />} />
        <Route path="/articleNew" element={<AddArticle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
