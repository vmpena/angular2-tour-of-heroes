export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Ms. Nasty' },
      { id: 12, name: 'Warrant XL' },
      { id: 13, name: 'Seahorse' },
      { id: 14, name: 'Jaguar' },
      { id: 15, name: 'Aon Flux' },
      { id: 16, name: 'RooMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr Pugnacious' },
      { id: 19, name: 'Vampire Q' },
      { id: 20, name: 'Tornida' }
    ];
    return { heroes };
  }
}
