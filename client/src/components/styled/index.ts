import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid dodgerblue;
  margin: 2px 5px 2px 0;
  padding: 3px 6px;
  cursor: pointer;
  &:hover {
    background: lightskyblue;
  }
`;

export const Header = styled.header`
  margin: 0;
  padding: 5px 10px;
  background: #def;
  color: darkblue;
`;

export const Counter = styled.div`
  float: right;
  font-size: 2em;
  line-height: 2.5em;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  li {
    list-style-type: none;
    padding: 5px;
    margin: 5px;
    border: 1px solid silver;
  }
`;
