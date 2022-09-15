-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ad" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year_playing" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "week_day" TEXT NOT NULL,
    "hour_start" TEXT NOT NULL,
    "hour_end" TEXT NOT NULL,
    "use_voice_channel" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" TEXT NOT NULL,
    CONSTRAINT "ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ad" ("created_at", "discord", "gameId", "hour_end", "hour_start", "id", "name", "use_voice_channel", "week_day", "year_playing") SELECT "created_at", "discord", "gameId", "hour_end", "hour_start", "id", "name", "use_voice_channel", "week_day", "year_playing" FROM "ad";
DROP TABLE "ad";
ALTER TABLE "new_ad" RENAME TO "ad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
