const fs = require("fs")

const jsonData = fs.readFileSync('movies.json','utf-8')

const movieData = JSON.parse(jsonData)

require("dotenv").config()

const {initializeDb} = require("./db/db.connect")



const MovieModel = require("./movieModel")







function seedData(){
    try{
        for(const movie of movieData) {
            const newMovie = new MovieModel({
                title:movie.title,
                releaseYear:movie.releaseYear,
                genre:movie.genre,
                director:movie.director,
                actors:movie.actors,
                language:movie.language,
                country:movie.country,
                rating:movie.rating,
                plot:movie.plot,
                awards:movie.awards,
                posterUrl:movie.posterUrl,
                trailerUrl:movie.trailerUrl,
            })
            newMovie.save()
        }

    } catch (error) {
        console.log("Error seeding data:", error)

    }
}

initializeDb()

seedData()