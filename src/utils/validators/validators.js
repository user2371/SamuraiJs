export const reaquiredField = (value) => {
    console.log(value)
    let trimedValue = typeof (value) === "string" ? value.trim() : value 
    console.log(trimedValue)
    if (value && trimedValue) return undefined
    return "Field is required"
}

export const maxtLength30 = (value) => {
    if (value.length > 30) return "Max length should be under 30 symbols"
    return undefined
}


export const maxLengthValidatorCreator = (maxLength) => {

    return (value) => {
        if (value.length > maxLength) return `Max length should be under ${maxLength} symbols`
        return undefined
    }
}