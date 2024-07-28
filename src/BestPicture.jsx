import React from 'react';
import NavBar from './NavBar.jsx';

function BestPicture () {
    return (
        <>
            <NavBar />

            <div></div>

            <h2><b><i>AWARD WINNERS</i></b></h2>

            <table>
                <thead>
                    <tr>
                        <th className="text-center"></th>
                        <th className="text-center">YEAR</th>
                        <th className="text-center">TITLE</th>
                        <th className="text-center">RATING</th>
                        <th className="text-center">DIRECTOR</th>
                        <th className="text-center">STARRING</th>
                        <th className="text-center">ACADEMY AWARDS</th>
                        <th className="text-center">GENRE(S)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>20xx</td>
                        <td>Movie Title</td>
                        <td>Movie Rating</td>
                        <td>Movie Director</td>
                        <td>Movie Actors</td>
                        <td>Movie Awards</td>
                        <td>Movie Genre(s)</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BestPicture;