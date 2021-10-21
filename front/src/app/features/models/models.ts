export interface League {
  _id: string;
  name: string;
  sport: string;
  teams: Team[];
}

export interface Team {
  _id: string;
  name: string;
  thumbnail: string;
  players: Player[];
}

export interface Player {
  id: number;
  name: string;
  position: string;
  thumbnail: string;
  signin: Signin;
  born: Date;
}

export interface Signin {
  amount: number;
  currency: string;
}
