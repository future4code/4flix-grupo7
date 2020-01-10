import { Series } from './../entities/Series';

export class CreateSeries {

        try {
            //ERR: ver o que tem de errado aqui
            const serie = new Series(series.title, series.date, series.length, series.synopsis, series.link, series.picture)
            const message: string = "Serie criada com sucesso!"
            return { message }
        }
        catch (err) {
            return err
        }

}

