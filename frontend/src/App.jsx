import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Study from './pages/Study';
import SectionView from './pages/SectionView';
import TopicView from './pages/TopicView';
import Quiz from './pages/Quiz';
import QuizPlay from './pages/QuizPlay';
import Flashcards from './pages/Flashcards';
import Oral from './pages/Oral';
import ConceptMap from './pages/ConceptMap';
import Glossary from './pages/Glossary';
import SearchPage from './pages/SearchPage';
import CheatSheet from './pages/CheatSheet';
import ChatBot from './pages/ChatBot';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="study" element={<Study />} />
        <Route path="study/:sectionId" element={<SectionView />} />
        <Route path="study/:sectionId/:topicId" element={<TopicView />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="quiz/play" element={<QuizPlay />} />
        <Route path="quiz/play/:sectionId" element={<QuizPlay />} />
        <Route path="flashcards" element={<Flashcards />} />
        <Route path="flashcards/:sectionId" element={<Flashcards />} />
        <Route path="oral" element={<Oral />} />
        <Route path="oral/:sectionId" element={<Oral />} />
        <Route path="map" element={<ConceptMap />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="cheatsheet" element={<CheatSheet />} />
        <Route path="chat" element={<ChatBot />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}
