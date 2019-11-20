import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './home.css';
import PostCard from '../post/postPreview/PostCard';
import Banner from '../home/banner/Banner';
import LocationBar from './locationBar/LocationBar';
import FilterBar from './searchFilter/filterBar/FilterBar';
import FilterBox from './searchFilter/filterBox/FilterBox';
import { loadPosts } from '../../actions/post/post';

const Home = () => {
  const dispatch = useDispatch();
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const posts = useSelector(state => state.post.postList);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="br-home-page-wrapper">
      <Banner />
      <FilterBar
        isFiltersVisible={isFiltersVisible}
        setIsFiltersVisible={setIsFiltersVisible}
      />
      <FilterBox
        isFiltersVisible={isFiltersVisible}
        setIsFiltersVisible={setIsFiltersVisible}
      />
      <div
        className={
          isFiltersVisible ? 'br-posts-filter-container' : 'br-posts-container'
        }
      >
        <LocationBar />
        {posts.map(post => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;
