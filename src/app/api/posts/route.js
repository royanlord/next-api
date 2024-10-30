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