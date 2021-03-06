import React from 'react';
import styled from 'styled-components';
import MusicItem from './MusicItem';
import { useMusicState } from '../MusicContext';


const MusicListBlock = styled.div`
    display:flex;
`;

function MusicList() {

    const songs = useMusicState();

    return (
        <MusicListBlock>
            {
                songs.map(song => (
                    <MusicItem
                        key={song.id}
                        id={song.id}
                        title={song.title}
                        artist={song.artist}
                        thumb={song.thumb}
                        url={song.url}
                        nowPlaying={song.nowPlaying}
                    />
                ))}
        </MusicListBlock>
    );
};

export default React.memo(MusicList);