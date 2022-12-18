export class ProviderService {
  id: number;
  title: string;
  duration: number;
  price: number;
}

export enum ServiceType {
  Single,
  Group,
  Repeating
}