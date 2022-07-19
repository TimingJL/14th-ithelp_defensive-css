import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DropdownButton = styled.div`
  border: 1px solid #6cb31b;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;
  box-sizing: border-box;
  background: #E3F3E7;
  white-space: nowrap;
`;

const Menu = styled.div`
  margin-top: 4px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
`;

const MenuItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;

const Dropdown = () => {
  return (
    <div>
      <DropdownButton>
        {/* Shattered */}
        Paws of Fury: The Legend of Hank
        <KeyboardArrowDownIcon />
      </DropdownButton>
      <Menu>
        <MenuItem>The Legend of La Llorona</MenuItem>
        <MenuItem>Shattered</MenuItem>
        <MenuItem>The Royal Treatment</MenuItem>
        <MenuItem>The Fallout</MenuItem>
        <MenuItem style={{ background: '#E3F3E7' }}>Paws of Fury: The Legend of Hank</MenuItem>
        <MenuItem>Mrs. Harris Goes to Paris</MenuItem>
        <MenuItem>Top Gun</MenuItem>
        <MenuItem>Violent Night</MenuItem>
      </Menu>
    </div>
  )
}

export default Dropdown;
