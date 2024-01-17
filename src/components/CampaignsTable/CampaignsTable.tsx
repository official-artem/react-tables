import { FC, memo } from 'react'
import { Campaign } from '../../data/types/campaign.type';
import { getNormalizedDate } from '../../utils/getNormalizedDate';

interface Props {
  table: Campaign[];
}

const CampaignsTable: FC<Props> = memo(
  ({ table }: Props) => {

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Clicks</th>
            <th scope="col">Cost</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>

          {table.map(({ campaignId, clicks, cost, date }) => {
            const normalizedDate = getNormalizedDate(date);
            return (
              <tr key={campaignId}>
                <th scope="row">{campaignId}</th>
                <td>{clicks}</td>
                <td>{cost}</td>
                <td>{normalizedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
)

export default CampaignsTable