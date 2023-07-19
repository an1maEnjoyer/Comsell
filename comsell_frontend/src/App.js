import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import AllTags from './components/AllTags';
import Filter from './components/Filter';
import Header from './components/Header';
import SelectedTags from './components/SelectedTags';

function App() {
  const [allTags, setAllTags] = useState(['Мультики', 'Аниме', 'Монстр']);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tag/getAll');
        setAllTags(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);
  const handleTagClick = (tag) => {
    if (allTags.includes(tag)) {
      setAllTags(allTags.filter((t) => t !== tag));
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
      setAllTags([...allTags, tag]);
    }
  };
  const allTagsFiltred = allTags.filter((item) => {
    console.log(item);
    if (item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
      return true;
    } else return false;
  });
  console.log(allTagsFiltred);
  return (
    <div className="App">
      <div className="circle"></div>
      <Header />
      <main>
        <div className="left_side">
          <SelectedTags tags={selectedTags} onTagClick={handleTagClick} />
          <AllTags
            tags={allTagsFiltred}
            onTagClick={handleTagClick}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <section className="rigth_side">
          <h3>Фильтры</h3>
          <Filter />
        </section>
      </main>
    </div>
  );
}

export default App;
