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
import Chapter from "./Page/Chapter";
import ThingsToKnow from "./Page/uploader/thingsToKnow";
import EditNovel from "./Page/uploader/editNovel";
import ListNovels from "./Page/ListNovels";
import Manager from "./Page/Manager";
import ManagerCategory from "./Page/Manager/ManagerCategory";
import ManagerNovel from "./Page/Manager/ManagerNovel";
import ManagerPublishNovel from "./Page/Manager/ManagerPublishNovel";
import ManagerReport from "./Page/Manager/ManagerReport";
import ManagerRole from "./Page/Manager/ManagerRole";
import ManagerTag from "./Page/Manager/ManagerTag";
import ManagerUser from "./Page/Manager/ManagerUser";
import ManagerUserRole from "./Page/Manager/ManagerUserRole";
import ManagerRolePermission from "./Page/Manager/ManagerRolePermission";
import AccountPage from "./Page/User/Setup/account";
import BookmarkPage from "./Page/User/Setup/userBookmark";
import FollowedPage from "./Page/User/Setup/userFollowed";
import ManagerAuthor from "./Page/Manager/ManagerAuthor";
import SearchNovels from "./Page/ListNovels/search";
import AddBanner from "./Page/Manager/ManagerNovelAddBanner";


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

          <Route path="/manager" element={<Manager />} >
            <Route path="ManagerCategory" element={<ManagerCategory />} />
            <Route path="ManagerAuthor" element={<ManagerAuthor />} />
            <Route path="ManagerTag" element={<ManagerTag />} />
            <Route path="ManagerUser" element={<ManagerUser />} />
            <Route path="ManagerRole" element={<ManagerRole />} />
            <Route path="ManagerPublishNovel" element={<ManagerPublishNovel />} />
            <Route path="ManagerNovel" element={<ManagerNovel />} />
            <Route path="AddBanner/:novelId" element={<AddBanner />} />
            <Route path="ManagerReport" element={<ManagerReport />} />
            <Route path="ManagerUserRole/:userId" element={<ManagerUserRole />} />
            <Route path="ManagerRolePermission/:roleId" element={<ManagerRolePermission />} />
          </Route>
          <Route path="/uploader" element={<Uploader />}>
            <Route path="published" element={<Published />} />
            <Route path="published/add-chapter/:novelId" element={<PublishChapter />} />
            <Route path="published/edit-novel/:novelId" element={<EditNovel />} />
            <Route path="published/list-chapters/:novelId" element={<ListChaptersInNovel />} />
            <Route path="new-novel" element={<NewNovel />} />
            <Route path="statistic" element={<Published />} />
            <Route path="things-to-know" element={<ThingsToKnow />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/user" element={<UserSetup />} >
            <Route path="account" element={<AccountPage />} />
            <Route path="bookmark" element={<BookmarkPage />} />
            <Route path="follow" element={<FollowedPage />} />
            </Route>
            
          </Route>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/novel/:novelId" element={<Novel />} />
          <Route path="/novel/:novelId/:chapterId" element={<Chapter />} />
          <Route path="list/:type/:id" element={<ListNovels />} />
          <Route path="list/search/:keyword" element={<SearchNovels />} />
          {/* <Route path="/tag/:tagId" element={<DanhSach/>} /> */}
        </Route>
      </Routes>
    </CustomRouter>
  );
}

export default App;
