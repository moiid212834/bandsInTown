import ArtistReducer from '../../features/artists/ArtistSlice';

describe('Theme reducer', () => {
    const initialState = {
        search: {
            term: '',
            status: 'idle', // idle | loading | succeeded | failed
        },
        searchedBand: {},
        selectedBand: {},
        recentlyViewed: [],
        suggested: {
            suggestionList: [],
            status: 'idle', // idle | loading | succeeded | failed
        },
        status: 'idle', // idle | loading | succeeded | failed
        error: null
    };

    it('should handle initial state', () => {
        expect(ArtistReducer(undefined, {type: 'unknown'})).toEqual({
            search: {
                term: '',
                status: 'idle', // idle | loading | succeeded | failed
            },
            searchedBand: {},
            selectedBand: {},
            recentlyViewed: [],
            suggested: {
                suggestionList: [],
                status: 'idle', // idle | loading | succeeded | failed
            },
            status: 'idle', // idle | loading | succeeded | failed
            error: null
        });
    });

    it('should initially set search status to idle', () => {
        const actual = ArtistReducer(initialState, {type: 'unknown'});
        expect(actual.search.status).toEqual('idle');
    });

    it('should initially set suggested status to idle', () => {
        const actual = ArtistReducer(initialState, {type: 'unknown'});
        expect(actual.suggested.status).toEqual('idle');
    });

    it('should initially set artist status to idle', () => {
        const actual = ArtistReducer(initialState, {type: 'unknown'});
        expect(actual.status).toEqual('idle');
    });
});