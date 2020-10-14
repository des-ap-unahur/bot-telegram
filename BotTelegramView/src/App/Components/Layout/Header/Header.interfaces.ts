export interface UserInterface {
  image: string;
  username: string;
}

export interface HeaderProps {
  auth: boolean;
  user: UserInterface;
}

export interface HeaderContentProps {
  auth: boolean;
  user: UserInterface;
  handleMenu: (event:any) => void;
  anchorEl: Element | null; 
  handleClose: () => void;
  open: boolean; 
  handleSignoutClickMenu: () => void;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  handleChangeRoute: (route:string | undefined) => void;
  isOpenDrawer: boolean;
}

export interface HeaderMenuModalProps {
  isOpenDrawer: boolean;
  handleDrawerClose: () => void;
  handleChangeRoute: (route:string | undefined) => void;
}

export interface HeaderAppBarProps {
  handleDrawerOpen: () => void;
  isOpenDrawer: boolean;
  handleMenu: (event:any) => void;
  handleClose: () => void;
  user: UserInterface;
  open: boolean;
  handleSignoutClickMenu: () => void;
  anchorEl: Element | null;
}

export interface MenuConfigInterface {
  icon: any;
  name: string;
  route: string;
  permissions?: string[];
}