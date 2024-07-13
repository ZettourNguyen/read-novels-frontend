import { useState } from "react";

import "./App.css";
import CustomRouter from "./router/CustomRouter";
import { Route, Routes } from "react-router-dom";
import history from "./router/history";
import MainLayout from "./layout/MainLayout";
import HomePage from "./Page/Home";
import SignupForm from "./Page/Signup";
import LoginForm from "./Page/Login";
import Private from "./Page/PrivatePage/private";
import PrivateRoutes from "./router/PrivateRoutes";
import UserSetup from "./Page/User/Setup";
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Novel from "./Page/Novel";
import Uploader from "./Page/uploader";


function App() {
  const [count, setCount] = useState(0);
  const userName = useSelector((state: RootState) => state.auth.user)
  const customUserPath = `/users/${userName}`
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/private" element={<Private />} />
          <Route path="/uploader" element={<Uploader />} />
          <Route element={<MainLayout />}>
            <Route path="/user/setup" element={<UserSetup />} />
          </Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/novel/:noveltitle" element={<Novel />} />
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
