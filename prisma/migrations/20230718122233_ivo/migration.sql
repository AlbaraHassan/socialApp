-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_id_fkey";

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
