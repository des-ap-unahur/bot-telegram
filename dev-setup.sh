#!/bin/bash
# General
# git fetch --all && git checkout . && git checkout develop && git pull

# BotTelegramDatabase
echo "";
echo "#################################";
echo "###### BotTelegramDatabase #######";
echo "#################################";
docker-compose exec bot-telegram-database mysql -u root --password=bot_telegram_secret -e "
CREATE DATABASE IF NOT EXISTS bot_telegram_database;
CREATE USER 'bot_telegram_user'@'localhost' IDENTIFIED VIA bot_telegram_password;
GRANT ALL PRIVILEGES ON bot_telegram_database.* TO 'bot_telegram_user'@'localhost';
FLUSH PRIVILEGES;
"

# BotTelegramServer
#echo "";
#echo "#################################";
#echo "####### BotTelegramServer ########"
#echo "#################################";
#cd BotTelegramServer
#npm i
#cd ..
#
## BotTelegramView
#echo "";
#echo "#################################";
#echo "######## BotTelegramView #########"
#echo "#################################";
#cd BotTelegramView
#npm i
#cd ..