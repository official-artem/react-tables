import { campaigns } from '../data/types/campaigns.data';

export const getProfileData = (profileId: number) => {
  return campaigns.filter((campaign) => campaign.profileId === profileId);
};