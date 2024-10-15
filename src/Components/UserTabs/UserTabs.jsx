import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "../UserTabs/UserTabs.css"
import ImageList from '../ImageList/ImageList';
import StandardImageList from '../ImageList/ImageList';
import VideoList from '../ImageList/VideoList';
import { useSelector } from 'react-redux';

export default function UserTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const darkMode=useSelector(state=>state.darkMode)

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: darkMode ?  "rgba(255, 255, 255, 0.12)":'divider', display: 'flex', justifyContent: 'center' }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example" 
            className='customeTabs'
            sx={{color:darkMode&&"white"}}
          >
            <Tab label="posts" value="1"  sx={{color:darkMode&&"white"}}/>
            <Tab label="Reels" value="2"  sx={{color:darkMode&&"white"}}/>
            <Tab label="colaberation" value="3"  sx={{color:darkMode&&"white"}}/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{width:"100%", display:"flex",alignItems:"center",justifyContent:"center"}}>
          <StandardImageList/>
        </TabPanel>
        <TabPanel value="2"  sx={{width:"100%", display:"flex",alignItems:"center",justifyContent:"center"}}>
          <VideoList/>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
