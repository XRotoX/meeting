import { Container } from '@mui/material'
import { styled } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'

const StyledBoardContainer = styled(Container)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    // backgroundColor: 'rgb(200, 200, 200, 0.1)',
    backgroundColor: '#fff',
  }));

export default function BoardContainer({children}) {
    const matches = useMediaQuery('(min-width:900px)')
    StyledBoardContainer.boxShadow = 'none'
    return (
        <StyledBoardContainer maxWidth="md">
            {children}
        </StyledBoardContainer>
    )
}
