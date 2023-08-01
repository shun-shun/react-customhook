import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { UserProfile } from "./types/UserProfile";
import axios from "axios";
import { User } from "./types/api/User";

const user: UserProfile = {
  id: 1,
  name: "ごん",
  email: "hogehoge@gon.com",
  address: "hogehoge",
};

function App() {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchData = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name} ${user.username}`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setUserProfile(data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
