import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import BuildIcon from '@material-ui/icons/Build';
import CloudIcon from '@material-ui/icons/Cloud';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AppsIcon from '@material-ui/icons/Apps';
import StorageIcon from '@material-ui/icons/Storage';
import MailIcon from '@material-ui/icons/Mail';

import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WorkIcon from '@material-ui/icons/Work';

import FingerprintIcon from '@material-ui/icons/Fingerprint';
import GroupIcon from '@material-ui/icons/Group';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

export const menuData = [
  {
    title: 'Services',
    link: '/services',
    subNav: [
      {
        menutitle: 'Web',
        subtitle: 'Full stack web development',
        path: '/services/web',
        icon: <LaptopIcon />,
      },
      {
        menutitle: 'Mobile',
        subtitle: 'React native app development',
        path: '/services/mobile',
        icon: <PhoneAndroidIcon />,
      },
      {
        menutitle: 'UI/UX',
        subtitle: 'Mobile and web app design',
        path: '/services/ui-ux',
        icon: <BorderColorIcon />,
      },
      {
        menutitle: 'QA & Testing',
        subtitle: 'Application testing services',
        path: '/services/testing',
        icon: <BuildIcon />,
      },
      {
        menutitle: 'Cloud',
        subtitle: 'Cloud services',
        path: '/services/cloud',
        icon: <CloudIcon />,
      },
      {
        menutitle: 'Devops',
        subtitle: 'Devops services',
        path: '/services/devops',
        icon: <AllInclusiveIcon />,
      },
      {
        menutitle: 'Progressive Web Apps',
        subtitle: 'PWA development services',
        path: '/services/apps',
        icon: <AppsIcon />,
      },
      {
        menutitle: 'Serverless',
        subtitle: 'serverless app development',
        path: '/services/serverless',
        icon: <StorageIcon />,
      },
      {
        menutitle: 'Get an Estimate',
        subtitle: 'Project development cost estimation',
        path: '/services/estimate-development',
        icon: <MailIcon />,
      },
    ],
  },

  {
    title: 'Work',
    link: '/work',
    subNav: [
      {
        menutitle: 'Process',
        subtitle: 'How we work',
        path: '/work/process',
        icon: <SettingsIcon />,
      },
      {
        menutitle: 'Engagement Model',
        subtitle: 'Client engagement models',
        path: '/work/engagement-model',
        icon: <MeetingRoomIcon />,
      },
      {
        menutitle: 'Technologies',
        subtitle: 'Technologies we use',
        path: '/work/technologies',
        icon: <EmojiObjectsIcon />,
      },
      {
        menutitle: 'Clients',
        subtitle: 'Clients we work with',
        path: '/work/clients',
        icon: <WorkIcon />,
      },
      {
        menutitle: 'Get an Estimate',
        subtitle: 'Project or hiring cost estimation',
        path: '/work/estimate-hiring',
        icon: <MailIcon />,
      },
    ],
  },
  {
    title: 'Company',
    link: '/company',
    subNav: [
      {
        menutitle: 'About',
        subtitle: 'Who we are',
        path: '/company/about',
        icon: <FingerprintIcon />,
      },
      {
        menutitle: 'Team',
        subtitle: 'Geeks behind the scene',
        path: '/company/team',
        icon: <GroupIcon />,
      },
      {
        menutitle: 'Blog',
        subtitle: 'Sharing our knowledge',
        path: '/company/blog',
        icon: <LocalLibraryIcon />,
      },
      {
        menutitle: 'Careers',
        subtitle: 'We are hiring',
        path: '/company/careers',
        icon: <PermContactCalendarIcon />,
      },
      {
        menutitle: 'Contact Us',
        subtitle: 'We love to hear from you',
        path: '/company/contact-us',
        icon: <MailIcon />,
      },
    ],
  },
];
