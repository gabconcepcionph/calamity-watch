import { create } from 'zustand';
import hotlinesData from './hotlines.json';

const normalizedHotlines = Object.entries(hotlinesData).map(([agency, contacts]) => ({
  agency,
  contacts: Array.isArray(contacts) ? contacts : [contacts],
}));

const useHotlinesStore = create(() => ({
  hotlines: normalizedHotlines,
}));

export default useHotlinesStore;
