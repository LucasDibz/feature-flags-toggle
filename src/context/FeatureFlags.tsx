import { ReactNode, createContext, useState } from 'react';

import { features as defaultFeatures } from './features-flags';

type Features = Record<keyof typeof defaultFeatures, boolean>;

type FeatureFlagsContext = {
  features: Features;
  toggleFeature: (feature: string) => void;
};

export const FeatureFlags = createContext({} as FeatureFlagsContext);

type FeatureFlagsProviderProps = {
  children: ReactNode;
};

export const FeatureFlagsProvider = ({
  children,
}: FeatureFlagsProviderProps) => {
  const [features, setFeatures] = useState<Features>(defaultFeatures);

  function toggleFeature(feature: string) {
    if (!isKey(feature)) return;

    setFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  }

  return (
    <FeatureFlags.Provider value={{ features, toggleFeature }}>
      {children}
    </FeatureFlags.Provider>
  );
};

function isKey(key: string): key is keyof typeof defaultFeatures {
  return Object.keys(defaultFeatures).includes(key);
}
