import React from 'react';
import Headbar from '../Page/header'
import SmallHeader from '../Page/smallHeader'
import ExploreContents from '../Explore/explore-content'
import './explore.css';

function Explore() {
  return (
    <div className="explore">
        <Headbar/>
        <SmallHeader/>
        <ExploreContents />
    </div>
  );
}

export default Explore;
