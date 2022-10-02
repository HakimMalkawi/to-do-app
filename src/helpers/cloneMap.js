export const cloneMap = map => 
    new Map( JSON.parse( JSON.stringify( Array.from( map ) ) ) )