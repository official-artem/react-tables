import { memo, useEffect, useState } from 'react';
import { Profile } from '../../data/types/profile.type';
import { useNavigate, useParams } from 'react-router-dom';
import { Campaign } from '../../data/types/campaign.type';
import { getProfileData } from '../../utils/getProfileData';
import CampaignsTable from '../CampaignsTable/CampaignsTable';

interface Props {
  table: Profile[];
}

export const ProfilesTable = memo(
  ({ table }: Props) => {
    const { profileId } = useParams();
    const navigate = useNavigate();
    const [profiles, setProfiles] = useState<Profile[]>(table);
    const [connectedCampaigns, setConnectedCampaigns] = useState<Campaign[]>([])

    
    useEffect(() => {
      if (profileId) {
        setConnectedCampaigns(getProfileData(+profileId));
        setProfiles(prevState => prevState.filter((profile) => profile.profileId === +profileId));
      } else {
        setProfiles(table);
      }
    }, [profileId, table])

    const handleClickRow = (path: string) => {
      return navigate(path);
    }

    return (
      <>
        <h1>{profileId ? "Profile" : "Profiles"}</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Country</th>
              <th scope="col">MarketPlace</th>
            </tr>
          </thead>
          <tbody>

            {profiles.map(({ profileId, country, marketplace }) => {
              return (
                <tr style={{ cursor: "pointer" }} onClick={() => handleClickRow(`${profileId}`)} key={profileId}>
                  <th scope="row">{profileId}</th>
                  <td>{country}</td>
                  <td>{marketplace}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {profileId && (
          <>
            <h2>Campaigns:</h2>

            <CampaignsTable table={connectedCampaigns} />
          </>
        )}
      </>
    );
  }
)

export default ProfilesTable;