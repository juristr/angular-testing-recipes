import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

  it('should return empty array if no items given', () => {
    const items = null;

    const filtered = filterPipe.transform(items, 'name', 'Hans');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return items if no field is given', () => {
    const items = [];
    items.push({ id: 1, name: 'Hans' });

    const filtered = filterPipe.transform(items, null, 'Hans');

    expect(filtered).toEqual(items);
  });

  it('should return items if no value is given', () => {
    const items = [];
    items.push({ id: 1, name: 'Hans' });

    const filtered = filterPipe.transform(items, 'name', null);

    expect(filtered).toEqual(items);
  });

  it('should filter correctly', () => {
    const items = [];

    items.push({ id: 1, name: 'Hans' });
    items.push({ id: 2, name: 'Franz' });
    items.push({ id: 3, name: 'Kurt' });
    items.push({ id: 4, name: 'Gustav' });

    const filtered = filterPipe.transform(items, 'name', 'Hans');

    expect(filtered.length).toBe(1);
  });

  it('should filter two items', () => {
    const items = [];

    items.push({ id: 1, name: 'Hans' });
    items.push({ id: 2, name: 'Hans' });
    items.push({ id: 3, name: 'Kurt' });
    items.push({ id: 4, name: 'Gustav' });

    const filtered = filterPipe.transform(items, 'name', 'Hans');

    expect(filtered.length).toBe(2);
  });
});
