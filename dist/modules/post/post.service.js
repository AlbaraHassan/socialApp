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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../core/prisma/prisma.service");
const helpers_1 = require("../../core/helpers/helpers");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    addPost(_a) {
        var { userId } = _a, post = __rest(_a, ["userId"]);
        return this.prisma.post.create({
            data: Object.assign(Object.assign({}, post), { authorId: userId })
        });
    }
    async deletePostFromAUser({ postId, userId }) {
        if (userId)
            return (0, helpers_1.exclude)(await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    posts: {
                        delete: { id: postId }
                    }
                },
                include: {
                    posts: true,
                }
            }), 'password');
        return (0, helpers_1.exclude)(await this.prisma.post.delete({
            where: {
                id: postId
            }
        }));
    }
    async getPostsOfUser({ authorId, take, page }) {
        const totalPages = await this.prisma.post.count({ where: { authorId } });
        if (page > Math.ceil(totalPages / take))
            throw Error(`Page ${page} Does Not Exist`);
        return this.prisma.post.findMany({
            where: {
                authorId
            },
            take,
            skip: take * (page - 1)
        });
    }
    getPost(postId) {
        return this.prisma.post.findUnique({
            where: {
                id: postId
            }
        });
    }
    async getAllPosts({ take, page }) {
        const totalPages = await this.prisma.post.count();
        if (page > Math.ceil(totalPages / take))
            throw Error(`Page ${page} Does Not Exist`);
        return this.prisma.post.findMany({
            take,
            skip: take * (page - 1)
        });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map