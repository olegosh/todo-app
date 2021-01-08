export const generateId = (idLength = 16, numeralSystem = 16, idString = '') => {
    for (let i = 0; i < idLength; i++) {
        idString += Math.floor(Math.random() * numeralSystem)
            .toString(numeralSystem);
    }
    return idString;
}