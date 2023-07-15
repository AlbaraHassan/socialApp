import { Post as PostSchema, User } from '@prisma/client';
import { PostDTO } from './post.dto';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    addPost(postData: PostDTO, req: any): Promise<PostSchema>;
    deletePostFromAAUser(postId: number): Promise<PostSchema>;
    deletePost(postId: number, req: any): Promise<User>;
    getAllPosts(page?: number, take?: number): Promise<PostSchema[]>;
    getPostsOfUser(id: number, page?: number, take?: number): Promise<PostSchema[]>;
    getPost(id: number): Promise<PostSchema>;
}
