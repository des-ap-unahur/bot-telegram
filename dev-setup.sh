#!/bin/bash
# General
# git fetch --all && git checkout . && git checkout develop && git pull

# BotTelegramDatabase
echo "";
echo "#################################";
echo "###### BotTelegramDatabase #######";
echo "#################################";
docker-compose exec bot-telegram-database mysql -u root --password=bot_telegram_secret -e "
CREATE DATABASE IF NOT EXISTS bot_telegram_database;"

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