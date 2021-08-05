import { useEffect, useState } from 'react';
import Placeholder from './components/Placeholder';
import Profile from './components/Profile';
import profiles from './utils/profiles';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          {profiles.length > 0 &&
            profiles.map((profile) => <Placeholder key={profile.id} />)}
        </>
      ) : (
        <>
          {profiles.length > 0 &&
            profiles.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))}
        </>
      )}
    </div>
  );
}

export default App;
