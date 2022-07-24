export default class API {

    static userRegister(body) {
        return fetch(`http://127.0.0.1:8000/register/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( body )
            }).then( response => response.json())
    }

    static teamRegister(body) {
        return fetch(`http://127.0.0.1:8000/api/register-team/`, {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then( response => response.json())
    }

    static getRegisteredTeams(){
        return fetch("http://127.0.0.1:8000/api/view-teams/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then( resp => resp.json())
    }

    static hostTournament(body) {
        return fetch(`http://127.0.0.1:8000/api/host-tournament/`, {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then( response => response.json())
    }

    static getAvailableTournaments(){
        return fetch("http://127.0.0.1:8000/api/view-tournaments/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then( resp => resp.json())
    }

    static checkIn(body) {
        return fetch(`http://127.0.0.1:8000/api/checkin/`, {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then( response => response.json())
    }

    static getCheckInList() {
        return fetch("http://127.0.0.1:8000/api/checkins-list/", {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
        }).then( resp => resp.json())
    }

    static createMatchWinners(body) {
        return fetch(`http://127.0.0.1:8000/api/create-match-winner/`, {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then( response => response.json())
    }

    static getWinnersList() {
        return fetch("http://127.0.0.1:8000/api/match-winners-list/", {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
        }).then( resp => resp.json())
    }

    static createComments(body) {
        return fetch(`http://127.0.0.1:8000/api/create-comment/`, {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then( response => response.json())
    }

    static getCommentsList() {
        return fetch("http://127.0.0.1:8000/api/comments-list/", {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
        }).then( resp => resp.json())
    }
}
