import React from 'react';
import Search from '../Search';
import Tag from '../Tag';
import styles from './AllTags.module.scss';

function AllTags({ tags, onTagClick, searchValue, setSearchValue }) {
  console.log(tags);
  return (
    <section className={styles.all_tags_container}>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <h2>Все теги</h2>
      <div className={styles.all_tags}>
        {tags.map((item, index) => (
          <Tag key={index} title={item} onClick={() => onTagClick(item)} />
        ))}
      </div>
    </section>
  );
}

export default AllTags;
