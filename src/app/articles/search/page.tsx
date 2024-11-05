interface SearchArticlePageProps {
  searchParams: {
    searchText: string
  }
}
const SearchArticlePage = ({ searchParams }: SearchArticlePageProps) => {
  console.log({ searchParams });
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        Search Result for: {searchParams.searchText}
      </h1>
    </section>
  )
}

export default SearchArticlePage