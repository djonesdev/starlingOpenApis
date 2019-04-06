import { formatDob } from './text-formatter'

describe('text-formatter.js', () => {
    it('should format a date correctly', () => {
        expect(formatDob('12032019')).toEqual('12-03-2019')
        expect(formatDob('22041066')).toEqual('22-04-1066')
    })
})