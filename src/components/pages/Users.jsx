import { styled } from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"

const users = [...Array(10).keys()].map((val) => { // keys()に修正
  return {
    id: val,
    name: `こうへい${val}`,
    image: "/Dog.jpg",
    email: `${val}kouhei.com`,
    phone: `${val}90-0909-0909`,
    company: {
      name: `${val}infinit`
    },
    website: `kouhei${val}@co.jp` 
  }
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <SUserArea>
      {users.map((user) => (
        <UserCard key={user.id} user={user}/> 
      ))}
      </SUserArea>
    </SContainer>
  ) 
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`