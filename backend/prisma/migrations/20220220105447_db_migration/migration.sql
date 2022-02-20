-- CreateTable
CREATE TABLE "Freelancer" (
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "competencies" TEXT[]
);

-- CreateTable
CREATE TABLE "Recruiter" (
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "competencies" TEXT[]
);

-- CreateTable
CREATE TABLE "Posts" (
    "email" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "is_disp" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Freelancer_email_key" ON "Freelancer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_email_key" ON "Recruiter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Posts_email_key" ON "Posts"("email");
