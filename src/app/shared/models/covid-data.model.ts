export interface CovidData {
  confirmed?: SingleData;
  recovered?: SingleData;
  deaths?: SingleData;
}

interface SingleData {
  value: number;
  detail: string;
}