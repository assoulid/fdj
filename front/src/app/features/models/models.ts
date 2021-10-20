export interface League {
  _id: number;
  name: string;
  sport: string;
  teams: Team[];
}

export interface Team {
  id: number;
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
