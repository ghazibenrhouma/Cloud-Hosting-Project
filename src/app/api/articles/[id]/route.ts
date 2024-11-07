import { articles } from '@/utils/data';
import { UpdateArticleDto } from '@/utils/dtos';
import { NextRequest, NextResponse } from 'next/server';


interface Props{
    params: {
        id: string
    }
}

/**
 * @method GET
 * @route  ~/api/articles/:id
 * @description GET Single Article by ID
 * @access public
 */

export function GET ( request:  NextRequest, { params }: Props) {
    console.log(request);

const article = articles.find((article) => article.id === parseInt(params.id))

    if (!article) {
        return NextResponse.json({ message: 'No articles found !' }, { status: 404 });
    }

    return NextResponse.json(article, { status: 200 });

} 

/**
 * @method PUT
 * @route  ~/api/articles/:id
 * @description Update Article
 * @access public
 */

export async function PUT ( request:  NextRequest, { params }: Props) {

const article  = articles.find((article) => article.id === parseInt(params.id))

    if (!article) {
        return NextResponse.json({ message: 'No articles found !' }, { status: 404 });
    }

    const res = await (request.json()) as UpdateArticleDto;
console.log({res});

    if (!res) {
        return NextResponse.json({ message: 'No articles found !' }, { status: 404 });
    }

    Object.assign(article, res);


    return NextResponse.json(res, { status: 200 });

} 

/**
 * @method DELETE
 * @route  ~/api/articles/:id
 * @description Delete Article
 * @access public
 */

export function DELETE ( request:  NextRequest, { params }: Props) {

const article = articles.find((article) => article.id === parseInt(params.id))

    if (!article) {
        return NextResponse.json({ message: 'No articles found !' }, { status: 404 });
    }

    articles.splice(articles.indexOf(article), 1);

    return NextResponse.json({ message: 'Article deleted successfully !' }, { status: 200 });

} 
