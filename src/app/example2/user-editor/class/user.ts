export class User {
  userName: string;
  userEmail: string;
  userPhones: string;
  userColor: string;
  constructor(name: string, email: string, phone: string, color1: string) {
    this.userName = name;
    this.userEmail = email;
    this.userPhones = phone;
    this.userColor = color1;
  }
}
