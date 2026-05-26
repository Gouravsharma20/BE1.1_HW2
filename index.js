require("dotenv").config()

const {initializeDb} = require("./db/db.connect")

const fs = require("fs")

const MovieModel = require("./movieModel")

const jsonData = fs.readFileSync('movies.json','utf-8')

const movieData = JSON.parse(jsonData)

async function seedData(){
    await initializeDb()
    try{
        for(const movieData of moviesData) {
            const newMovie = new MovieModel({
                title:movieData.title,
                releaseYear:movieData.releaseYear,
                genre:movieData.genre,
                director:movieData.director,
                actors:movieData.actors,
                language:movieData.language,
                country:movieData.country,
                rating:movieData.rating,
                plot:movieData.plot,
                awards:movieData.awards,
                posterUrl:movieData.posterUrl,
                trailerUrl:movieData.trailerUrl,
            })
            await newMovie.save()
            console.log(newMovie.title)
        }

    } catch (error) {
        console.log("Error seeding data:", error)

    }
}

seedData()