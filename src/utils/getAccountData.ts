import { profiles } from '../data/profile.data';

export const getAccountData = (accountId: number) => {
  return profiles.filter(profile => profile.accountId === accountId);
}