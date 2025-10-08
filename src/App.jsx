import './App.css';
import { PrimaryButton } from './components/atoms/buttons/PrimaryButton';
import { SecondaryButton } from './components/atoms/buttons/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard'
function App() {
  const user = {
    name: "こうへい",
    image: "/Dog.jpg",
    email: "kouhei.com",
    phone: "090-0909-0909",
    company: {
      name: "infinit"
    },
    website: "kouhei@co.jp"
  }

  return (
    <>
      <div>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>テスト</SecondaryButton>
        <SearchInput />
        <UserCard user={user} />
        
      </div>
    </>
  );
}

export default App;
