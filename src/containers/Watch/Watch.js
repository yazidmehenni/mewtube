import React from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';

export default class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="metadata" viewCount={1000} />
        <div
          className="video-info-box"
          style={{ width: '100%', height: '100px', background: '#BD10E0' }}
        >
          Video Info box
        </div>
        <div
          className="comments"
          style={{ width: '100%', height: '100px', background: '#9013FE' }}
        >
          comments
        </div>
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
}
