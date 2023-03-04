import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { styled } from '@mui/material/styles';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.common.white,
    },
    '&.Mui-selected': {
      backgroundColor: '#DB1D60',
      borderColor: '#DB1D60',
      fontWeight: 700,
    },
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    color: theme.palette.common.white,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1rem',
  },
}));

interface CustomizedPaginationProps {
  count: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const PrevIcon = () => <img src="/bulk/arrow-left.svg" alt="" />
const NextIcon = () => <img src="/bulk/arrow-right.svg" alt="" />

function CustomizedPagination({ count, onNextClick, onPrevClick }: CustomizedPaginationProps) {
  return (
    <CustomPagination
      color="primary"
      variant="outlined"
      hidePrevButton
      hideNextButton
      showFirstButton
      showLastButton
      count={count}
      sx={{
        '& .MuiPaginationItem-root': {
          borderRadius: '10px',
          color: '#fff',
          borderColor: '#fff',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#fff',
          },
          '&.Mui-selected': {
            backgroundColor: '#DB1D60',
            borderColor: '#DB1D60',
            fontWeight: 700,
          },
        },
        '& .MuiPaginationItem-page.Mui-selected': {
          color: '#fff',
        },
        '& .MuiSvgIcon-root': {
          fontSize: '1rem',
        },
      }}
      onChange={onNextClick}
      renderItem={(item) => {
        switch (item.type) {
          case 'previous':
            return (
              <PaginationItem
                component="button"
                onClick={onPrevClick}
                disabled={item.disabled}
                sx={{ color: 'white' }}
                size="large"
              >
                <PrevIcon />
              </PaginationItem>
            );
          case 'next':
            return (
              <PaginationItem
                component="button"
                onClick={onNextClick}
                disabled={item.disabled}
                sx={{ color: 'white' }}
                size="large"
              >
                <NextIcon />
              </PaginationItem>
            );
          default:
            return (
              <PaginationItem
                component="button"
                {...item}
                sx={{ color: 'white' }}
                size="large"
              />
            );
        }
      }}
    />
  );
}

export default CustomizedPagination;
