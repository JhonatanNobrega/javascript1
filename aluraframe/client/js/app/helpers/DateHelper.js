class DateHelper {
    
    static dataParaTexto(data)
    {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

    static textParaData(texto)
    {
        return new Date(...texto.split('-').map( (item, index) => item - indece % 2 ));
    }
}