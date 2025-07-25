import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Home Screen/HomeScreen";
import TabForm from "./components/Tab Form/TabForm";
import Pagination from "./components/Pagination/Pagination";
import AutoComplete from "./components/Auto Complete/AutoComplete";
import FileExplorer from "./components/File Explorer/FileExplorer";
import ProgressBar from "./components/Progress Bar/ProgressBar";
import OtpInput from "./components/Otp Input/OtpInput";
import NestedCheckboxes from "./components/NestedCheckboxes/NestedCheckboxes";
import ChipsInput from "./components/Chips Input/ChipsInput";
import TodoList from "./components/Todo List/TodoList";
import Accordian from "./components/Accordian/Accordian";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tab-form" element={<TabForm />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/auto-complete" element={<AutoComplete />} />
        <Route path="/file-explorer" element={<FileExplorer />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/otp-input" element={<OtpInput />} />
        <Route path="/nested-checkboxes" element={<NestedCheckboxes />} />
        <Route path="/chip-inputs" element={<ChipsInput />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/accordian" element={<Accordian />} />
      </Routes>
    </>
  );
}

export default App;
