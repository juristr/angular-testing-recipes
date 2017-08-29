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

        let items = null;

        let filtered = filterPipe.transform(items, 'name', 'Hans');

        expect(filtered.length).toBe(0);
        expect(filtered).toEqual([]);
    });

    it('should return items if no field is given', () => {

        let items = [];
        items.push({ id: 1, name: 'Hans' });

        let filtered = filterPipe.transform(items, null, 'Hans');

        expect(filtered).toEqual(items);
    });

    it('should return items if no value is given', () => {

        let items = [];
        items.push({ id: 1, name: 'Hans' });

        let filtered = filterPipe.transform(items, 'name', null);

        expect(filtered).toEqual(items);
    });

    it('should filter correctly', () => {

        let items = [];

        items.push({ id: 1, name: 'Hans' });
        items.push({ id: 2, name: 'Franz' });
        items.push({ id: 3, name: 'Kurt' });
        items.push({ id: 4, name: 'Gustav' });

        let filtered = filterPipe.transform(items, 'name', 'Hans');

        expect(filtered.length).toBeGreaterThan(0);
        expect(filtered.length).toBe(1);
    });

    it('should filter two items', () => {

        let items = [];

        items.push({ id: 1, name: 'Hans' });
        items.push({ id: 2, name: 'Hans' });
        items.push({ id: 3, name: 'Kurt' });
        items.push({ id: 4, name: 'Gustav' });

        let filtered = filterPipe.transform(items, 'name', 'Hans');

        expect(filtered.length).toBe(2);
    });
});
