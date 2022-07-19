import React from 'react';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

const StyledSideMenuCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .menu {
    width: 300px;
    /* height: 600px; */
    position: fixed;
    box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
    left: 60px;
    top: 66px;
    border-radius: 4px;
  }
  .content {
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 2px 0px rgb(0 0 0 / 14%), 0px 1px 17px 0px rgb(0 0 0 / 12%);
    width: 800px;
    height: 800px;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
    margin-left: 300px;
    margin-top: 700px;
  }
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 30px;
  padding: 20px 50px;
`;


const SideMenuCase = () => {
  return (
    <StyledSideMenuCase>
      <div className="menu">
        <Logo>
        Logo
        </Logo>
        <MenuList dense>
          <MenuItem>
            <ListItemText inset>首頁</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>帳號設定</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>朋友</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>社團</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>粉絲專頁</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>心理健康</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>動態回顧</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>募款活動</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>廣告中心</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>活動</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemText inset>權限管理</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText inset>登出</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
      <div className="content">
        <Stack spacing={1} sx={{ width: 200, height: 200 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} sx={{ width: 200, height: 200 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} sx={{ width: 200, height: 200 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} sx={{ width: 200, height: 200 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} sx={{ width: 200, height: 200 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} sx={{ width: 200, height: 200 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
      </div>
    </StyledSideMenuCase>
  )
}

export default SideMenuCase;
