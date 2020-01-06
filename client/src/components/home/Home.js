import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './home.css';
import PostList from '../post/postList/PostList';
import PostThumb from '../post/postThumb/PostThumb';
import PostCard from '../post/postCard/PostCard';
import Banner from '../home/banner/Banner';
import ResultsBar from './resultsSort/ResultsBar';
import FilterBar from './searchFilter/filterBar/FilterBar';
import FilterBox from './searchFilter/filterBox/FilterBox';
import { loadPosts } from '../../actions/post/post';

const Home = () => {
  const dispatch = useDispatch();
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const posts = useSelector(state => state.post.postList);
  const layout = useSelector(state => state.filters.layout);

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
      <FilterBox isFiltersVisible={isFiltersVisible} />
      <div
        className={
          isFiltersVisible ? 'br-posts-filter-container' : 'br-posts-container'
        }
      >
        <ResultsBar />
        {layout === 'List' &&
          posts.map((post, index) => {
            return <PostList key={index} post={post} />;
          })}
        {layout === 'Thumb' &&
          posts.map((post, index) => {
            return <PostThumb key={index} post={post} />;
          })}
        {layout === 'Gallery' &&
          posts.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Home;
