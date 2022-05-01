import { Routes, Route, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage, LoginPage, RegisterPage, ContactsPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
