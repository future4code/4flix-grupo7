import { Movie } from './../entities/Movies';

export class CreateMovie {

        try {
            //ERR: ver o que tem de errado aqui
            const movie = new Movie(movie.title, movie.date, movie.length, movie.synopsis, movie.link,  movie.picture, movie.id)
            const message: string = "Novo filme criado com sucesso!"
            return { message }
        }
        catch (err) {
            return err
        }

}

