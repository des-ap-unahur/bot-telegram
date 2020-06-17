#!/bin/bash
# General
# git fetch --all && git checkout . && git checkout develop && git pull

# BotTelegramDatabase
echo "";
echo "#################################";
echo "###### BotTelegramDatabase #######";
echo "#################################";
echo "El password es: bot-telegram-password"
docker-compose exec bot-telegram-database mysql -uroot -p -e "
CREATE DATABASE IF NOT EXISTS bot-telegram-database;
CREATE USER 'bot-telegram-user'@'localhost' IDENTIFIED VIA bot-telegram-secret;
GRANT ALL PRIVILEGES ON bot-telegram-database.* TO 'bot-telegram-user'@'localhost';
FLUSH PRIVILEGES;
"

# BotTelegramServer
echo "";
echo "#################################";
echo "####### BotTelegramServer ########"
echo "#################################";
cd BotTelegramServer
npm i
cd ..

# BotTelegramView
echo "";
echo "#################################";
echo "######## BotTelegramView #########"
echo "#################################";
cd BotTelegramView
npm i
cd ..