import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto.js';
import { UpdateCharacterDto } from './dto/update-character.dto.js';
import { Character } from './entities/character.entity.js';

@Injectable()
export class CharactersService {
  characters: Character[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Citadel of Ricks', url: '' },
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      location: { name: 'Earth (Replacement Dimension)', url: '' },
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      location: { name: 'Earth (Replacement Dimension)', url: '' },
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      location: { name: 'Earth (Replacement Dimension)', url: '' },
    },
    {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      location: { name: 'Earth (Replacement Dimension)', url: '' },
    },
  ];

  create(createCharacterDto: CreateCharacterDto): Character {
    const character: Character = {
      id: Date.now(),
      ...createCharacterDto,
    };
    this.characters.push(character);
    return character;
  }

  findAll() {
    return [...this.characters];
  }

  findOne(id: number) {
    const character = this.characters.find((character) => id === character.id);
    if (!character) {
      throw new NotFoundException(`Character ${id} not found`);
    }
    return character;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto): Character {
    const character = this.findOne(id);
    Object.assign(character, updateCharacterDto);
    return character;
  }

  remove(id: number): void {
    const before = this.characters.length;
    this.characters = this.characters.filter((item) => item.id !== id);
    if (this.characters.length === before) {
      throw new NotFoundException(`Character ${id} not found`);
    }
  }
}
