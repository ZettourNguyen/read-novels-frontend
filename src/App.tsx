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
import Published from "./Page/uploader/published";
import NewNovel from "./Page/uploader/newNovel";
import PublishChapter from "./Page/uploader/publishedChapters";
import ListChaptersInNovel from "./Page/uploader/listChapters";


function App() {
  const userName = useSelector((state: RootState) => state.auth.user)
  const customUserPath = `/users/${userName}`
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/private" element={<Private />} />
          <Route path="/uploader" element={<Uploader />}>
            <Route path="published" element={<Published />} />
            <Route path="published/add-chapter/:novelId" element={<PublishChapter />} />
            <Route path="published/list-chapters/:novelId" element={<ListChaptersInNovel />} />
            <Route path="new-novel" element={<NewNovel />} />
            <Route path="statistic" element={<Published />} />
            {/* <Route path="report-handle" element={<ReportHandle />} />
            <Route path="things-to-know" element={<ThingsToKnow />} /> */}
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/user/setup" element={<UserSetup />} />
          </Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/novel/:novelId" element={<Novel />} />
          {/* <Route path="/category/:categoryId" element={<Category/>} /> */}
          {/* <Route path="/tag/:tagId" element={<DanhSach/>} /> */}
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
