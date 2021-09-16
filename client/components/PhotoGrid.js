import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className='photo-grid'>
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
        {/* <pre>
          {JSON.stringify(this.props.posts, null, 2)}
        </pre> */}
      </div>
    );
  },
});

export default PhotoGrid;
