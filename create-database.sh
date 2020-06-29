#!/bin/bash
# Create Database
echo "#################################";
echo "####### Create Database ########";
echo "#################################";
docker-compose exec bot-telegram-database mysql -u root --password=bot_telegram_secret -e "
CREATE DATABASE IF NOT EXISTS bot_telegram_database;"
echo "#################################";
echo "########### finished ############";
echo "#################################";