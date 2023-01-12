export interface IUserInfo {
    phone: string;
    login: {
      username: string;
    }
    name: {
      first: string;
      last: string;
    }
    email: string;
    picture: {
      large: string;
    };
}

export interface INavLink {
  title: string;
  link: string;
}


export interface IUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

  