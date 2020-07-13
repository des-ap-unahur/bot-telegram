import Markup from 'telegraf/markup';

const Keyboard = () => {
  Markup.keyboard([
    ['🔍 Search', '😎 Popular'], 
    ['☸ Setting', '📞 Feedback'], 
    ['📢 Ads', '⭐️ Rate us', '👥 Share']
  ])
  .oneTime()
  .resize()
  .extra()
}

export default Keyboard;