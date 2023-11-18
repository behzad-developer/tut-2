export interface TokenInterface {
  access: {
    token: string;
    expiresIn: string;
  };
  refresh: string;
}
