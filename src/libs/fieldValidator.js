

export const validateAmount = (field) => {
    
    const isOnlyNumber = /^[\d]+([.][\d]+)?$/g;

    if (field === undefined || field.trim().length === 0) return `Falta completar`;

    if(!isOnlyNumber.test(field)) return `Formato invalido`;

    if(field.length <= 0) return `Debe contener al menos 1 caracteres`;

    if(field.length >= 26) return `Como maximo se permite 25 caracteres`;
    
    return '';
    
}

export const validateConcept = (field) => {
    
    if (field === undefined || field.trim().length === 0) return `Falta completar`;

    if(field.length <= 1) return `Debe contener al menos 2 caracteres`;

    if(field.length >= 50) return `Como maximo se permite 50 caracteres`;
    
    return '';
}

export const validateType = (field) => {

    if(field === undefined || field.trim().length === 0) return `Falta completar`;

    if(field === 0 || field === 1) return `Valor no valido`;
    
    return '';
}

