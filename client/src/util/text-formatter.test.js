import { majorUnitsToMinor, minorUnitsToMajor } from './text-formatter'

describe('text-formatter', () => {
    it('should turn majorUnits into minorUnits', () => {
        expect(majorUnitsToMinor(11.32)).toEqual(1132)
        expect(majorUnitsToMinor(-132311.32)).toEqual(-13231132)
        expect(majorUnitsToMinor('11.32')).toEqual(1132)
    })
    it('should turn minorUnits into Major', () => {
        expect(minorUnitsToMajor(1132)).toEqual(11.32)
        expect(minorUnitsToMajor(-13231132)).toEqual(-132311.32)
    })
})