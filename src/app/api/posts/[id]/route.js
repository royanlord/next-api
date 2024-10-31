import { NextResponse } from "next/server"
import prisma from "../../../../../prisma/client"

export async function GET(request, { params }) {
    // get params id
    const id = parseInt(params.id)

    // get detail post
    const post = await prisma.post.findUnique({
        where: {
            id
        }
    })

    // condition to check
    if (!post) {
        return NextResponse.json(
            {
                success: true,
                message: "Detail Data Post Not Found!",
                data: null,
            },
            {
                status: 404
            }
        )
    }

    return NextResponse.json(
        {
            success: true,
            message: "Detail data post",
            data: post
        },
        {
            status: 200
        }
    )
}

export async function PATCH(request, { params }) {
    // get params id
    const id = parseInt(params.id)

    // get request data
    const { title, content } = await request.json() 

    const post = await prisma.post.update({
        where: {
            id
        },
        data: {
            title: title,
            content: content,
            updatedAt: new Date()
        }
    })

    return NextResponse.json(
        {
            success: true,
            message: "Data post updated!",
            data: post
        },
        {
            status: 200
        }
    )

}