import { Account } from '../../data/types/account.type';

interface Props {
  table: Account[]
}

export const AccountsTable = ({table}: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">AccountId</th>
          <th scope="col">Email</th>
          <th scope="col">AuthToken</th>
          <th scope="col">CreationDate</th>
        </tr>
      </thead>
      <tbody>

        {table.map(({account_id, authToken, email, creationDate}) => {
      return (
        <tr key={account_id}>
          <th scope="row">{account_id}</th>
          <td>{email}</td>
          <td>{authToken}</td>
          <td>{creationDate.getTime()}</td>
        </tr>
      )
    })}
      </tbody>
    </table>
  )
}

export default AccountsTable;