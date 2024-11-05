import AddCommentsForm from "@/components/comments/AddCommentsForm";
import CommentsItem from "@/components/comments/CommentsItem";
import { Article } from "@/utils/types";

interface SingleArticlePageProps {
    params: {
        id: string
    }
}
const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    console.log({ params })
    if (!response.ok) {
        throw new Error('Failed to fetch article');
    }
    const article: Article = await response.json();
    return (
        <section className='fix-height container m-auto w-full px-5 pt-8 md:w-3/4'>
            <div className='bg-white p-7 rounded-lg mb-7'>
                <h1 className='text-3xl font-bold text-gray-700 mb-2'>{article.title}</h1>
                <div className='text-gray-400'>
                    1/1/2024
                </div>
                <p className='text-gray-800 text-xl mt-5'>{article.body}</p>
            </div>
            <AddCommentsForm />
            <h4 className='text-xl font-semibold text-gray-800 ps-1 mb-2 mt-7'>
                Comments
            </h4>
            <CommentsItem />
            <CommentsItem />
            <CommentsItem />
        </section>
    )
}

export default SingleArticlePage