export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  type?: string;
  gender?: string;
  location?: { name: string; url: string };
}
