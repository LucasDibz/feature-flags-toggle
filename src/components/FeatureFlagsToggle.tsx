import { Flag } from '@phosphor-icons/react';
import { useFeatureFlags } from '../hooks/useFeatureFlags';

export function FeatureFlagsToggle() {
  const { features, toggleFeature } = useFeatureFlags();

  if (!import.meta.env.DEV) return null;

  return (
    <details className='absolute bottom-20 left-20 w-fit bg-white rounded-full hover:cursor-pointer p-1 shadow-md hover:scale-110 transition open:rounded-md open:p-4 open:hover:scale-100 group open:hover:cursor-default'>
      <summary className='list-none flex gap-3 font-bold items-center group-open:cursor-pointer group-open:hover:animate-pulse transition'>
        <Flag />

        <span className='hidden group-open:block'>Features Flags</span>
      </summary>

      <div className='max-h-96 my-3 overflow-y-auto flex flex-col gap-3 border-t border-gray-200'>
        {Object.entries(features).map(([feature, value]) => (
          <div key={feature} className='flex gap-3 items-center mx-8'>
            <label htmlFor={feature} className='hover:cursor-pointer'>
              {feature}
            </label>
            <input
              className='hover:cursor-pointer'
              type='checkbox'
              name={feature}
              id={feature}
              checked={value}
              onChange={() => toggleFeature(feature)}
            />
          </div>
        ))}
      </div>
    </details>
  );
}
