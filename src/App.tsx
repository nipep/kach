import { Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayout/index.tsx";
import "./scss/app.scss";
import TrainingList from "./pages/TrainingList/index.tsx";
import AddTraining from "./pages/AddTraining/index.tsx";
import SetTraining from "./pages/SetTraining/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import ModalAddTraining from "./pages/ModalAddTraining/index.tsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route path="training" element={<TrainingList />} />
        <Route path="training/add" element={<ModalAddTraining/>} />
        <Route path="training/:id" element={<AddTraining />} />
        <Route path="training/:id/set" element={<SetTraining />}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;
