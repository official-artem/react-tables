import { memo, useEffect, useState } from 'react';
import { Account } from '../../data/types/account.type';
import { useNavigate, useParams } from 'react-router-dom';
import { Profile } from '../../data/types/profile.type';
import { getAccountData } from '../../utils/getAccountData';
import ProfilesTable from '../ProfilesTable/ProfilesTable';
import { getNormalizedDate } from '../../utils/getNormalizedDate';

interface Props {
  table: Account[]
}

export const AccountsTable = memo(
  ({ table }: Props) => {
    const { accountId } = useParams();
    const navigate = useNavigate();
    const [ profilesData, setProfilesData ] = useState<Profile[]>([])
    const [accounts, setAccounts] = useState<Account[]>(table)

    useEffect(() => {
      if (accountId) {
        setProfilesData(getAccountData(+accountId));
        setAccounts(prevState => prevState.filter((account) => account.account_id === +accountId))
      } else {
        setAccounts(table);
      }
    }, [accountId, table])


    const handleClickRow = (path: string) => {
      return navigate(path)
    }

    return (
      <>
      <h1>{accountId ? "Account" : "Accounts"}</h1>
        <table className="table">
          <thead>
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Token</th>
                <th>Created Date</th>
            </tr>
          </thead>

          <tbody>
            {accounts.map(({ account_id, authToken, email, creationDate }) => {
              return (
                <tr style={{ cursor: "pointer" }} onClick={() => handleClickRow(`accounts/${account_id}`)} key={account_id}>
                  <th scope="row">{account_id}</th>
                  <td>{email}</td>
                  <td>{authToken}</td>
                  <td>{getNormalizedDate(creationDate)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {accountId && (
          <ProfilesTable table={profilesData} />
        )}
      </>
    );
  }
)

export default AccountsTable;