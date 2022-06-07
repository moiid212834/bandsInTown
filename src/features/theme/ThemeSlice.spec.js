import ThemeReducer, {
  toggleMode,
} from './ThemeSlice';

describe('Theme reducer', () => {
  const initialState = {
    mode: 'light',
  };
  it('should handle initial state', () => {
    expect(ThemeReducer(undefined, { type: 'unknown' })).toEqual({
      mode: 'light'
    });
  });

  it('should handle toggle', () => {
    const actual = ThemeReducer(initialState, toggleMode());
    expect(actual.mode).toEqual('dark');
  });
});
