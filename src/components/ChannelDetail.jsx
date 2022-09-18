import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchResult = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
            setChannelDetail(data?.items[0]);

            const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
            setVideos(videoData?.items);
        }
        fetchResult();
    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    height: '300px',
                    background: 'linear-gradient(142deg, rgba(2,0,36,1) 0%, rgba(228,12,12,1) 69%, rgba(11,2,2,1) 100%)',
                    zIndex: 10,
                }}/>
                <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
            </Box>
            <Box p={2} display="flex"> 
                <Box sx={{ mr: { sm: '100px' } }}/>
                <Videos videos={videos}/>
            </Box>
        </Box>
    );
};

export default ChannelDetail;