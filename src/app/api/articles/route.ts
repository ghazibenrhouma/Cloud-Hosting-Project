import { articles } from '@/utils/data';
import { CreateArticleDto } from '@/utils/dtos';
import { createArticleSchema } from '@/utils/validationSchema';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, Article } from '@prisma/client';

const prisma = new PrismaClient();


/**
 * @method GET
 * @route  ~/api/articles
 * @description Get All Articles
 * @access public
 */
export function GET ( request:  NextRequest) {

    return NextResponse.json(articles, { status: 200 });

} 




/**
 * @method POST
 * @route  ~/api/articles
 * @description Create New Article
 * @access public
 */
export async function POST ( request:  NextRequest) {
    const body = await (request.json()) as CreateArticleDto;
 
    const validation = createArticleSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json( {message: validation.error.issues[0].message} , { status: 400 });
    }

    const newArticle: Article = await prisma.article.create({ 
        data:  {
            title: body.title,
            description: body.description
        }
     });


    return NextResponse.json(newArticle, { status: 201 });
}

