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
  