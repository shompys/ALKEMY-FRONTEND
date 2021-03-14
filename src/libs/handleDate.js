
export const formatUnixToDateWithHour = unix => {

    const genericDate = new Date(unix);

    const date = genericDate.getDate() < 10 ? '0' + genericDate.getDate() : genericDate.getDate();
    const mounth = (genericDate.getMonth()+1) < 10 ? '0' + (genericDate.getMonth()+1) : (genericDate.getMonth()+1);
    

    const hours = genericDate.getHours() < 10 ? '0' + genericDate.getHours() : genericDate.getHours();
    const minutes = genericDate.getMinutes() < 10 ? '0' + genericDate.getMinutes() : genericDate.getMinutes();
    const seconds = genericDate.getSeconds() < 10 ? '0' + genericDate.getSeconds() : genericDate.getSeconds();

    return `${date}/${mounth}/${genericDate.getFullYear()} ${hours}:${minutes}:${seconds}`;

}

export const formatUnixToDate = unix => {

    const genericDate = new Date(unix);
    const date = genericDate.getDate() < 10 ? '0' + genericDate.getDate() : genericDate.getDate();
    const mounth = (genericDate.getMonth()+1) < 10 ? '0' + (genericDate.getMonth()+1) : (genericDate.getMonth()+1);

    return `${date}/${mounth}/${genericDate.getFullYear()}`;

}