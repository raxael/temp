import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { AppLayout } from './layouts/AppLayout';
import { AccountPage } from './pages/Account/AccountPage';
import { BalancePaymentPage } from './pages/BalanceTopUp/BalancePaymentPage';
import { BalanceTopUpPage } from './pages/BalanceTopUp/BalanceTopUpPage';
import { BonusesPage } from './pages/Bonuses/BonusesPage';
import { CardsPage } from './pages/Cards/CardsPage';
import { HistoryPage } from './pages/History/HistoryPage';
import { HomePage } from './pages/Home/HomePage';
import { NewCardPage } from './pages/NewCard/NewCardPage';
import { NewCardDetailsPage } from './pages/NewCardDetails/NewCardDetailsPage';
import { OnboardingPage } from './pages/Onboarding/OnboardingPage';
import { PaymentMethodPage } from './pages/PaymentMethod/PaymentMethodPage';
import { RegistrationPage } from './pages/Registration/RegistrationPage';
import { RegistrationSuccessPage } from './pages/Registration/RegistrationSuccessPage';
import { TransferPage } from './pages/Transfer/TransferPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'cards', element: <CardsPage /> },
      { path: 'cards/new', element: <NewCardPage /> },
      { path: 'cards/:slug', element: <NewCardDetailsPage /> },
      { path: 'payment-methods', element: <PaymentMethodPage /> },
      { path: 'balance/top-up', element: <BalanceTopUpPage /> },
      { path: 'balance/payment', element: <BalancePaymentPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'transfer', element: <TransferPage /> },
      { path: 'bonuses', element: <BonusesPage /> },
      { path: 'account', element: <AccountPage /> },
      { path: 'onboarding', element: <OnboardingPage /> },
      { path: 'registration', element: <RegistrationPage /> },
      { path: 'registration/completed', element: <RegistrationSuccessPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

const App = () => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;

