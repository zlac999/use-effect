import { useState } from "react";
import EffectDep from "./components/EffectDep";
import EffectEmptyDep from "./components/EffectEmptyDep";
import EffectNoDep from "./components/EffectNoDep";
import Username from "./components/Username";
import users from "./mocks/users";

function App() {
  const [test, setTest] = useState(0);

  const nums = [
    {
      unique: 1,
      value: 1,
    },
    {
      unique: 2,
      value: 2,
    },
    {
      unique: 3,
      value: 3,
    },
    {
      unique: 4,
      value: 4,
    },
    {
      unique: 5,
      value: 5,
    },
  ];

  function NumsUnique({ value }) {
    return <li>{value}</li>;
  }

  return (
    <>
      <EffectNoDep />
      <EffectEmptyDep />
      <EffectDep test={test} />
      <button onClick={() => setTest(test + 1)}>Change test</button>

      {users.map((user) => (
        <Username
          firstname={user.firstname}
          lastname={user.lastname}
          key={user.id}
        />
      ))}

      <ul>
        {nums.map((nums) => (
          <NumsUnique key={nums.unique} value={nums.value} />
        ))}
      </ul>
    </>
  );
}

export default App;
