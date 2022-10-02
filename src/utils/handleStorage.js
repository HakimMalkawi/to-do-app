export const getStorage = key =>
    new Map( JSON.parse( localStorage.getItem( key ) ) )

export const setStorage = ( key, value ) =>
    localStorage.setItem( key, JSON.stringify( Array.from( value ) ) )