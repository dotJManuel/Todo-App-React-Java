import {useParams, Link} from 'react-router-dom'
// import {useState} from 'react'
// import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
// import { useAuth } from './security/AuthContext'
// import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'

function WelcomeComponent() {

    //const authContext = useAuth()
    const {username } = useParams()

    // const [message, setMessage] = useState(null)

    // function callHelloWorldRestApi() {
    //     retrieveHelloWorldPathVariable('JManuel')
    //     .then( (response) => successfulResponse(response) )
    //     .catch ( (error) => errorResponse(error) )
    //     .finally ( () => console.log('cleanup') )
    // }

    // function successfulResponse(response) {
    //     // setMessage(response.data)
    //     setMessage(response.data.message)
    // }

    // function errorResponse(error) {
    //     console.log(error)
    // }

    //retrieveHelloWorldPathVariable('dot', authContext.token)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            {/* <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>Call Hello world</button>
            </div> */}
            {/* <div className="text-info">{message}</div> */}
        </div>
    )
}

export default WelcomeComponent