import ThemeReducer, {
  toggleMode,
} from '../../features/theme/ThemeSlice';

describe('Theme reducer', () => {
  const initialState = {
    mode: 'dark',
  };
  it('should handle initial state', () => {
    expect(ThemeReducer(undefined, { type: 'unknown' })).toEqual({
      mode: 'dark'
    });
  });

  it('should handle toggle', () => {
    const actual = ThemeReducer(initialState, toggleMode());
    expect(actual.mode).toEqual('light');
  });
});
