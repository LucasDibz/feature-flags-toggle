import { useContext } from 'react';
import { FeatureFlags } from '../context/FeatureFlags';

export const useFeatureFlags = () => useContext(FeatureFlags);
