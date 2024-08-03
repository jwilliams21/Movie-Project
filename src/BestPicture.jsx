import React from 'react';
import NavBar from './NavBar.jsx';
import './MainStyle.css'
import Oppenheimer from './assets/Oppenheimer_MoviePoster.jpg';
import Everything from './assets/EverythingEverywhereAllAtOnce_MoviePoster.jpg';
import CODA from './assets/CODA_MoviePoster.jpg';
import Nomadland from './assets/Nomadland_MoviePoster.jpg';
import Parasite from './assets/Parasite_MoviePoster.jpg';


function BestPicture () {
    return (
        <>
            <NavBar />

            <div></div>

            <h2><b><i>AWARD WINNERS</i></b></h2>

            <table>
                <thead>
                    <tr>
                        <th className="text-center">POSTER</th>
                        <th className="text-center">YEAR</th>
                        <th className="text-center">TITLE</th>
                        <th className="text-center">RATING</th>
                        <th className="text-center">DIRECTOR</th>
                        <th className="text-center">STARRING</th>
                        <th className="text-center">GENRE(S)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="movie-poster">
                            <img src={Oppenheimer} alt="Oppenheimer" />
                        </td>
                        <td>2023</td>
                        <td>Oppenheimer</td>
                        <td>8.3</td>
                        <td>Christopher Nolan</td>
                        <td>Cillian Murphy ~ Emily Blunt ~ Matt Damon</td>
                        <td>Drama ~ Biography ~ History</td>
                    </tr>
                    <tr>
                        <td className="movie-poster">
                            <img src={Everything} alt="Everything Everywhere All at Once" />
                        </td>
                        <td>2022</td>
                        <td>Everything Everywhere All at Once</td>
                        <td>7.8</td>
                        <td>Daniel Kwan ~ Daniel Scheinert</td>
                        <td>Michelle Yeoh ~ Stephanie Hsu ~ Jamie Lee Curtis</td>
                        <td>Sci-Fi Epic ~ Action ~ Adventure ~ Fantasy</td>
                    </tr>
                    <tr>
                        <td className="movie-poster">
                            <img src={CODA} alt="CODA" />
                        </td>
                        <td>2021</td>
                        <td>CODA</td>
                        <td>8.0</td>
                        <td>Dian Heder</td>
                        <td>Emilia Jones ~ Marlee Matlin ~ Troy Kotsur</td>
                        <td>Comedy ~ Drama</td>
                    </tr>
                    <tr>
                        <td className="movie-poster">
                            <img src={Nomadland} alt="Nomadland" />
                        </td>
                        <td>2020</td>
                        <td>Nomadland</td>
                        <td>7.3</td>
                        <td>Chloe Zhao</td>
                        <td>Frances McDormand ~ David Strathairn ~ Linda May</td>
                        <td>Drama ~ Tragedy</td>
                    </tr>
                    <tr>
                        <td className="movie-poster">
                            <img src={Parasite} alt="Parasite" />
                        </td>
                        <td>2019</td>
                        <td>Parasite</td>
                        <td>8.5</td>
                        <td>Bong Joon Ho</td>
                        <td>Song Kang-ho ~ Lee Sun-kyun ~ Cho Yeo-jeong</td>
                        <td>Psychological Thriller ~ Drama</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2018</td>
                        <td>Green Book</td>
                        <td>8.2</td>
                        <td>Peter Farrelly</td>
                        <td>Viggo Mortensen ~ Mahershala Ali ~ Linda Cardellini</td>
                        <td>Period Drama ~ Comedy</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2017</td>
                        <td>The Shape of Water</td>
                        <td>7.3</td>
                        <td>Guillermo del Toro</td>
                        <td>Sally Hawkins ~ Octavia Spencer ~ Michael Shannon</td>
                        <td>Dark Fantasy ~ Romance ~ Sci-Fi ~ Fairy Tale</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2016</td>
                        <td>Moonlight</td>
                        <td>7.4</td>
                        <td>Barry Jenkins</td>
                        <td>Mahershala Ali ~ Naomie Harris ~ Trevante Rhodes</td>
                        <td>Coming-of-Age ~ Drama</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2015</td>
                        <td>Spotlight</td>
                        <td>8.1</td>
                        <td>Tom McCarthy</td>
                        <td>Mark Ruffalo ~ Michael Keaton ~ Rachel McAdams</td>
                        <td>Period Drama ~ True Crime ~ Biography</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2014</td>
                        <td>Birdman or (The Unexpected Virtue of Ignorance)</td>
                        <td>7.7</td>
                        <td>Alejandro G. Inarritu</td>
                        <td>Michael Keaton ~ Zach Galifianakis ~ Edward Norton</td>
                        <td>Dark Comedy ~ Satire ~ Showbiz Drama</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2013</td>
                        <td>12 Years a Slave</td>
                        <td>8.1</td>
                        <td>Steve McQueen</td>
                        <td>Chiwetel Ejiofor ~ Michael Kenneth Williams ~ Michael Fassbender</td>
                        <td>Historical Epic ~ Period Drama ~ History</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2012</td>
                        <td>Argo</td>
                        <td>7.7</td>
                        <td>Ben Affleck</td>
                        <td>Ben Affleck ~ Bryan Cranston ~ John Goodman</td>
                        <td>Political Drama ~ Thriller</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2011</td>
                        <td>The Artist</td>
                        <td>7.9</td>
                        <td>Michel Hazanavicius</td>
                        <td>Jean Dujardin ~ Berenice Bejo ~ John Goodman</td>
                        <td>Romance ~ Showbiz Drama ~ Slapstick Comedy</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2010</td>
                        <td>The King's Speech</td>
                        <td>8.0</td>
                        <td>Tom Hooper</td>
                        <td>Colin Firth ~ Geoffrey Rush ~ Helena Bonham Carter</td>
                        <td>Political Drama ~ History</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2009</td>
                        <td>The Hurt Locker</td>
                        <td>7.5</td>
                        <td>Kathryn Bigelow</td>
                        <td>Jeremy Renner ~ Anthony Mackie ~ Brian Geraghty</td>
                        <td>Drama ~ Thriller ~ War</td>
                    </tr>

                    <tr>
                        <td className="movie-poster"></td>
                        <td>2008</td>
                        <td>Slumdog Millionaire</td>
                        <td>8.0</td>
                        <td>Danny Boyle ~ Loveleen Tandan</td>
                        <td>Dev Patel ~ Freida Pinto ~ Saurabh Shukla</td>
                        <td>Crime ~ Drama ~ Romance</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2007</td>
                        <td>No Country for Old Men</td>
                        <td>8.2</td>
                        <td>Ethan Coen ~ Joel Coen</td>
                        <td>Tommy Lee Jones ~ Javier Bardem ~ Josh Brolin</td>
                        <td>Contemporary Western ~ Serial Killer ~ Thriller</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2006</td>
                        <td>The Departed</td>
                        <td>8.5</td>
                        <td>Martin Scorsese</td>
                        <td>Leonardo DiCaprio ~ Matt Damon ~ Jack Nicholson</td>
                        <td>Cop Drama ~ Gangster ~ Thriller</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2005</td>
                        <td>Crash</td>
                        <td>7.7</td>
                        <td>Paul Haggis</td>
                        <td>Don Cheadle ~ Sandra Bullock ~ Thandiwe Newton</td>
                        <td>Crime ~ Drama ~ Thriller</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2004</td>
                        <td>Million Dollar Baby</td>
                        <td>8.1</td>
                        <td>Clint Eastwood</td>
                        <td>Hilary Swank ~ Clint Eastwood ~ Morgan Freeman</td>
                        <td>Sport ~ Tragedy ~ Drama</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2003</td>
                        <td>The Lord of the Rings: The Return of the King</td>
                        <td>9.0</td>
                        <td>Peter Jackson</td>
                        <td>Elijah Wood ~ Viggo Mortensen ~ Ian McKellen</td>
                        <td>Fantasy Epic ~ Adventure ~ Action ~ Quest</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2002</td>
                        <td>Chicago</td>
                        <td>7.2</td>
                        <td>Rob Marshall</td>
                        <td>Renee Zellweger ~ Catherine Zeta-Jones ~ Richard Gere</td>
                        <td>Musical ~ True Crime ~ Comedy</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2001</td>
                        <td>A Beautiful Mind</td>
                        <td>8.2</td>
                        <td>Ron Howard</td>
                        <td>Russell Crowe ~ Ed Harris ~ Jennifer Connelly</td>
                        <td>Docudrama ~ Psychological ~ Mystery</td>
                    </tr>
                    <tr>
                        <td className="movie-poster"></td>
                        <td>2000</td>
                        <td>Gladiator</td>
                        <td>8.5</td>
                        <td>Ridley Scott</td>
                        <td>Russell Crowe ~ Joaquin Phoenix ~ Connie Nielsen</td>
                        <td>Action Epic ~ Sword & Scandal ~ Adventure</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BestPicture;