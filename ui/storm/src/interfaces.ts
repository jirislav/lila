import { Prop } from 'common';

export interface StormOpts {
  data: StormData;
  pref: StormPrefs;
  i18n: any;
}

export interface StormPrefs {
  coords: 0 | 1 | 2;
  is3d: boolean;
  destination: boolean;
  rookCastle: boolean;
  moveEvent: number;
  highlight: boolean;
}

export interface StormData {
  puzzles: StormPuzzle[];
  notAnExploit: string;
  key?: string;
  signed?: string;
}

export interface StormVm {
  puzzleIndex: number;
  moveIndex: number;
  clock: number;
  history: Round[];
  puzzleStartAt?: number;
  combo: number;
  comboBest: number;
  modifier: StormModifier;
  run: {
    startAt: number;
    endAt?: number;
    moves: number;
    errors: number;
    response?: RunResponse;
  };
  dupTab?: boolean;
  signed: Prop<string | undefined>;
  lateStart: boolean;
  filterFailed: boolean;
}

export interface Round {
  puzzle: StormPuzzle;
  win: boolean;
  millis: number;
}

export interface StormModifier {
  moveAt: number;
  malus?: TimeMod;
  bonus?: TimeMod;
}

export interface TimeMod {
  seconds: number;
  at: number;
}

export interface StormPuzzle {
  id: string;
  fen: string;
  line: string;
  rating: number;
}

export interface DailyBest {
  score: number;
  prev?: number;
  at: number;
}

export interface StormRun {
  puzzles: number;
  score: number;
  moves: number;
  errors: number;
  combo: number;
  time: number;
  highest: number;
  signed?: string;
}

export interface RunResponse {
  newHigh?: NewHigh;
}

export interface NewHigh {
  key: 'day' | 'week' | 'month' | 'allTime';
  prev: number;
}
