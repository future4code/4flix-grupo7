export class Series {
    constructor(
        private title: string,
        private date: Date,
        private synopsis: string,
        private link: string,
        private picture: string,
        private episodes: Episodes[]
    ) {}
}

export type Episodes = {
    title: string,
    length: string,
    link: string,
    picture: string,
    synopsis: string
}
    