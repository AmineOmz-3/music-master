import React, { Component } from 'react'
import './App.css'

class Profile extends Component {

    render () {

        let artist = { name: '', followers: { total: '' } }

        if (this.props.artist !== null) {
            artist = this.props.artist
        }

        return (
            <div className="profile">
                <img className="profile-img" alt="Profile image" src={artist.images[0].url} />
                <div className="profile-info">
                    <div className="profile-name">{artist.name}</div>
                    <div className="profile-followers">{artist.followers.total} Followers</div>
                    <div className="profile-genres">
                        { artist.genres.map((genre, index) => {

                            genre = genre !== artist.genres[artist.genres.length - 1] ? `${genre}, ` : ` & ${genre}`

                            return (
                                <span key={index}> {genre} </span>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile