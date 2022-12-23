import React from 'react';

const alias = 'MAA_Movie-';
// list genres: https://api.themoviedb.org/3/genre/movie/list?api_key=c882fd33a9995e733b117841b29354c8


const side = ['Discover', 'TV & Movies', 'Movie List'];

const Sidebar = ({currentTab, setCurrentTab}) => {
  return (
    <div className={`${alias}sidebar`}>
      <h1>Fu$ionFilms</h1>
      <ul>
        {
          side.map((item, index) => <li key={index} onClick={() => setCurrentTab(index)} className={currentTab === index ? 'curentTab':''}>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default Sidebar;
