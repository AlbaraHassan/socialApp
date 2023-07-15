import { PrismaService } from '../../core/prisma/prisma.service';
import { Post, User } from '@prisma/client';
import { NewPostDto } from "./dto/newPost.dto";
import { DeletePostDto } from "./dto/deletePost.dto";
import { PostPaginationDto } from "./dto/postPagination.dto";
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    addPost({ userId, ...post }: NewPostDto): Promise<Post>;
    deletePostFromAUser({ postId, userId }: DeletePostDto): Promise<User & Post>;
    getPostsOfUser({ authorId, take, page }: PostPaginationDto): Promise<Post[]>;
    getPost(postId: number): Promise<Post>;
    getAllPosts({ take, page }: PostPaginationDto): Promise<Post[]>;
}
