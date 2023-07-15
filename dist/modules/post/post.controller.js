"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_dto_1 = require("./post.dto");
const post_service_1 = require("./post.service");
const role_enum_1 = require("../user/roles/role.enum");
const auth_decorator_1 = require("../auth/auth.decorator");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    addPost(postData, req) {
        return this.postService.addPost(Object.assign(Object.assign({}, postData), { userId: req.user.id }));
    }
    deletePostFromAAUser(postId) {
        return this.postService.deletePostFromAUser({ postId });
    }
    deletePost(postId, req) {
        return this.postService.deletePostFromAUser({
            postId,
            userId: req.user.id,
        });
    }
    getAllPosts(page = 1, take = 10) {
        return this.postService.getAllPosts({
            take: Number(take),
            page: Number(page),
        });
    }
    getPostsOfUser(id, page = 1, take = 10) {
        return this.postService.getPostsOfUser({
            authorId: id,
            take: Number(take),
            page: Number(page),
        });
    }
    getPost(id) {
        return this.postService.getPost(id);
    }
};
__decorate([
    (0, common_1.Post)('/own'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.PostDTO, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addPost", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, auth_decorator_1.Auth)([role_enum_1.Role.ADMIN]),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePostFromAAUser", null);
__decorate([
    (0, common_1.Delete)('/own/:id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllPosts", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostsOfUser", null);
__decorate([
    (0, common_1.Get)('/single/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPost", null);
PostController = __decorate([
    (0, common_1.Controller)('/post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map