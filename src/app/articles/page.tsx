import ArticleItem from '@/components/articles/ArticleItem';
import { Metadata } from 'next';
import { Article } from '@/utils/types';
import React from 'react'
import SearchArticleInput from '@/components/articles/SearchArticleInput';
import Pagination from '@/components/articles/Pagination';


const ArticlesPage = async () => {

  // delay for 1 seconds
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  const articles: Article[] = await response.json();
  console.log(articles);

  return (
    <section className='container m-auto px-5'>
      <SearchArticleInput />
      <div className='flex items-center justify-center flex-wrap gap-10'>
        {articles.slice(0, 6).map((item: Article) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination />
    </section>
  )
}

export default ArticlesPage

export const metadata: Metadata = {
  title: "Article Page",
  description: "This is the article page",
  icons: {
    icon: '/favicon.ico'
  },
};