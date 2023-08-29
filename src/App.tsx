import { useFeatureFlags } from './hooks/useFeatureFlags';

function App() {
  const {
    features: { isFeature1Enabled, isFeature2Enabled },
  } = useFeatureFlags();

  return (
    <div className='bg-gray-500 w-screen h-screen text-white'>
      <header className='text-center'>Header</header>
      <main className='flex flex-col items-center gap-5 border-red-100 rounded'>
        {isFeature1Enabled && <div>FEATURE 1</div>}

        {isFeature2Enabled && <div>FEATURE 2</div>}
      </main>
    </div>
  );
}

export default App;
