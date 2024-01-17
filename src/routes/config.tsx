import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import AccountsTable from '../components/AccountsTable/AccountsTable';
import { accounts } from '../data/accounts.data';
import ProfilesTable from '../components/ProfilesTable/ProfilesTable';
import { profiles } from '../data/profile.data';
import CampaignsTable from '../components/CampaignsTable/CampaignsTable';
import { campaigns } from '../data/types/campaigns.data';

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <AccountsTable table={accounts} />,
        index: true,
      },
      {
        path: "accounts/:accountId",
        element: <AccountsTable table={accounts} />,
      },
      {
        path: "profiles",
        element: <ProfilesTable table={profiles} />,
        children: [
          {
            path: ":profileId",
            element: <ProfilesTable table={profiles} />,
          },
        ]
      },
      {
        path: "campaigns",
        element: <CampaignsTable table={campaigns} />
      }
    ]
  }
])