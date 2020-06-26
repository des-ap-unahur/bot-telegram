#!/bin/bash
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
cd BotTelegramServer/Environments
cp development.env.local development.env
cd ../..

# BotTelegramView
echo "";
echo "#################################";
echo "######## BotTelegramView #########"
echo "#################################";
cd BotTelegramView/src/App/Config
cp Constants.config.js.local Constants.config.js
cd ../../../..