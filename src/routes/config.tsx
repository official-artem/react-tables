import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/Layout';
import AccountsTable from '../components/AccountsTable/AccountsTable';
import { accounts } from '../data/accounts.data';
import ProfilesTable from '../components/ProfilesTable/ProfilesTable';
import { profiles } from '../data/profile.data';

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <AccountsTable table={accounts} />,
        index: true
      },
      {
        path: "/profiles",
        element: <ProfilesTable table={profiles} />
      }
    ]
  },
  {
    path: "/profiles",
    element: <App />,
  },
  {
    path: "/campaigns",
    element: <App />
  }
])