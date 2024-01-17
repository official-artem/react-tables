import AccountsTable from './components/AccountsTable/AccountsTable';
import { accounts } from './data/accounts.data';

function App() {

  return (
    <AccountsTable table={accounts}/>
  )
}

export default App
