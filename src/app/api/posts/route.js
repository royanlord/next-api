const { NextResponse } = require("next/server");
const { default: prisma } = require("../../../../prisma/client");

export async function GET() {
    // get all posts
    const posts = await prisma.post.findMany();

    // return response json
    return NextResponse.json(
        {
            success: true,
            message: "List data posts",
            data: posts
        },
        { 
            status: 200 
        }
    );
}

export async function POST(request) {
    // get all request
    const { title, content } = await request.json()

    // create data post
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content
        }
    })

    return NextResponse.json(
        {
            success: true,
            message: "Post created successfully!",
            data: post
        },
        {
            status: 201
        }
    )
}