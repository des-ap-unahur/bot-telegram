import BotAction from '../../../Assets/Images/robot.svg';
import Polls from '../../../Assets/Images/poll-box.svg';
import UserTypes from '../../../Assets/Images/account-group.svg';
import Subscribers from '../../../Assets/Images/account.svg';
import Activities from '../../../Assets/Images/clipboard-text-multiple.svg';
import Home from '../../../Assets/Images/home.svg';
import { MenuConfigInterface } from './Header.interfaces';

export const menuConfig = (language:any): MenuConfigInterface[] => ([
  { icon:BotAction, name: language.botActions, route: '/dashboard/bot-actions' },
  { icon:Polls, name: language.polls, route: '/dashboard/polls' },
  { icon:UserTypes, name: language.userTypes, route: '/dashboard/user-types' },
  { icon:Subscribers, name: language.subscribers, route: '/dashboard/subscribers' },
  { icon:Activities, name: language.activities, route: '/dashboard/activities', permissions: ['Activities'] }
])


export const homePageConfig = (language:any) => ({
  icon:Home, name: language.homepage, route: '/dashboard'
})

export const langOptions = [
  {name: 'ES', value: 'ES'},
  {name: 'EN', value: 'EN'}
]