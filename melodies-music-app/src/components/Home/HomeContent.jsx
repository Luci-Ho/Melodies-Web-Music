import React from 'react';

import SectionGrid from './SectionGrid';
import MusicCard from './MusicCard';
import SectionTitle from './SectionTitle';

// import TrendingSongRow from './TrendingSongRow';
import ArtistCard from './ArtistCard';
import AlbumCard from './AlbumCard';
import PlaylistCard from './PlaylistCard';
import VideoCard from './VideoCard';
import JoinSection from './JoinSection';

import topSongs from '../../data/topSongs';
// import trendingSongs from '../../data/trendingSongs';
import artists from '../../data/artists';
import albums from '../../data/albums';
import playlists from '../../data/playlists';
import videos from '../../data/videos';

import BannerCarousel from './BannerCarousel';
import '../../style/SectionGrid.css';

const HomeContent = () => {
  return (
    <main className="body-content">
      <BannerCarousel />

      <SectionGrid
        title="Weekly Top"
        title1="Songs"
        items={topSongs}
        renderItem={(item, i) => <MusicCard key={i} {...item} />}
      />

      <SectionGrid        
        title="New Release"
        title1="Songs"
        items={topSongs}
        renderItem={(item, i) => <MusicCard key={i} {...item} />}
      />

      <SectionGrid
        title="Top"
        title1="Albums"
        items={topSongs}
        renderItem={(item, i) => <MusicCard key={i} {...item} />}
      />

      <SectionGrid
        title="Mood"
        title1="Playlist"
        items={topSongs}
        renderItem={(item, i) => <PlaylistCard key={i} {...item} />}
      />

      <SectionTitle
      title="Poppular"
      title1="Artist"
      />
      <div className="artist-scroll-wrapper">
        {artists.map((artist, index) => (
          <ArtistCard key={index} {...artist} />
        ))}
      </div>


      <SectionTitle 
      title="Music"
      title1="Video"
      />
      <div className="video-scroll-wrapper">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
        <button className="view-all-button">View All</button>
      </div>

      <SectionTitle 
      title="Join Our Platform"
      title1=""
      />
      <JoinSection />
    </main>
  );
};

export default HomeContent;