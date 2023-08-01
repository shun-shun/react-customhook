import "./App.css";
import { UserCard } from "./components/UserCard";
import { UserProfile } from "./types/UserProfile";

import { useAllUsers } from "./hooks/useAllUsers";

const user: UserProfile = {
  id: 1,
  name: "ごん",
  email: "hogehoge@gon.com",
  address: "hogehoge",
};

function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();

  const onClickFetchData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データの取得</button>
      {error ? (
        <p>データが取得できませんでした</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
