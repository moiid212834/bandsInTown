import EventReducer from '../../features/events/EventsSlice';
  
  describe('Theme reducer', () => {
    const initialState = {
        eventsList:[],
        status:'idle'
    };
    
    it('should handle initial state', () => {
      expect(EventReducer(undefined, { type: 'unknown' })).toEqual({
        eventsList:[],
        status:'idle'
      });
    });
  
    it('should initially set event list to empty',() => {
        const actual = EventReducer(initialState, {type:'unknown'});
        expect(actual.eventsList).toEqual([]);
      });
  });