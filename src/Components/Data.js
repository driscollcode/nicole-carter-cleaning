export default function Data(state, jwt) {
    if(state.app.get('loaded', 'data-batch')) {
        return <></>
    }
    fetchProjects(state, jwt)
    fetchTimeSheet(getMonday(new Date()), state, jwt)
    state.app.set('loaded', true, 'data-batch')
    return <></>
}

function fetchProjects(state, jwt) {
    fetch(state.app.config().api.endpoints.projects.fetch, {
        method: 'GET',
        headers: {
            "jwt": jwt
        },
    }).then(function(response) {
        return response.json();
    }).then(function(instances) {
        var projects = Object()
        for(var i = 0; i < instances.length; i++) {
            projects[instances[i].ID] = instances[i]
        }
        state.app.set('projects', projects, 'user-assets')
    }.bind(this))
}

function fetchTimeSheet(date, state, jwt) {
    fetch(state.app.config().api.endpoints.timesheets.fetch + getISODate(date), {
        method: 'GET',
        headers: {
            "jwt": jwt
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        var monday = new Date(data.Monday)
        state.app.set(getISODate(monday), data, 'timesheets')
    }.bind(this))
}

function getISODate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return yyyy + "-" + mm + "-" + dd
}

function getMonday(date) {
    var myDate = new Date(date)
    var today = date.getDay()
    var subtractDays = 0

    if(today == 0) {
        subtractDays = 6
    } else {
        subtractDays = myDate.getDay() - 1
    }

    if(subtractDays > 0) {
        myDate.setDate(myDate.getDate() - subtractDays)
    }

    return myDate
}