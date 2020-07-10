import Markup from 'telegraf/markup';

const Keyboard = () => {
  Markup.keyboard([
    ['🔍 Search pene', '😎 Popular pene'], 
    ['☸ Setting pene', '📞 Feedback pene'], 
    ['📢 Ads pene', '⭐️ Rate us pene', '👥 Share pene'],
    ['meee gusta el pene']
  ])
  .oneTime()
  .resize()
  .extra()
}

export default Keyboard;