export const canReConfigure = (from, to) =>{
    if(typeof from !== 'string') throw new Error("parameter provided must be a string")
    if(typeof to !== 'string') throw new Error("parameter provided must be a string")

    const isSameLength = from.length !== to.length
    if(isSameLength) return false

    const hasSameUniqueletters = new Set(from).size !== new Set(to).size
    if(hasSameUniqueletters) return false


    const transformations = {}
    for (let i = 0; i < from.length; i ++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    
    const storedLetter = transformations[fromLetter]
    
    if (storedLetter && storedLetter !== toLetter) return false
    transformations[fromLetter] = toLetter
    }

    return true
}