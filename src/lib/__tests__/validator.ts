import validator from '../validator';
import { deepMerge } from '../tools/deep-merge';
import { DEFAULTS } from '../../classes/Options';

it('returns an error with invalid schema', () => {
    let options = deepMerge(false, {}, DEFAULTS);
    options = deepMerge(false, options, { steamAccountName: 'abc123' });
    const result = validator(options, 'options');
    expect(result).not.toBeNull();
});
