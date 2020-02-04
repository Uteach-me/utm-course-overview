import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background-color: whitesmoke;
  border: none;
  outline: none;
  text-align: left;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  transition:background-color 0.3s linear;

  :hover {
    background-color: #ddd;
  }
`;

const CollapseButtons = (props) => {
  const names = props.titles

  return (
    names.map((name) => 
      <Button>{name.section_name}</Button>
    )
  );
};

export default CollapseButtons;