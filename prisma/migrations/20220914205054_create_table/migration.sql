-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ad" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year_playing" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "week_day" TEXT NOT NULL,
    "hour_start" INTEGER NOT NULL,
    "hour_end" INTEGER NOT NULL,
    "use_voice_channel" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" TEXT NOT NULL,
    CONSTRAINT "ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
