import { Profile } from '../../data/types/profile.type';

interface Props {
  table: Profile[];
}

export const ProfilesTable = ({ table }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Country</th>
          <th scope="col">MarketPlace</th>
        </tr>
      </thead>
      <tbody>

        {table.map(({ profileId, country, marketplace }) => {
          return (
            <tr key={profileId}>
              <th scope="row">{profileId}</th>
              <td>{country}</td>
              <td>{marketplace}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProfilesTable;