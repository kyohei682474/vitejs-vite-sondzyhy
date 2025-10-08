import styled from 'styled-components';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { Input } from '../atoms/input/Input'

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索してください" />
      <SButtonWrapper>
         <PrimaryButton>検索</PrimaryButton>
      </ SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  text-aligin: center;

`

const SButtonWrapper = styled.div`
  padding-left: 8px;

`
