export const majorUnitsToMinor = (number) => 
    Math.round(100 * parseFloat(number))

export const minorUnitsToMajor = (number) => 
    number / 100