// our-dimain.com/new-meetup
import NewQuizAttempt from '../../components/Quiz/NewQuizAttempt'
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'

function NewMeetupPage() {
    const router = useRouter() // This allows user to go to toher pages
    const globalCtx = useContext(GlobalContext)//

    async function addMeetupHandler(enteredMeetupData)  {
        //await globalCtx.updateGlobals({cmd: 'addMeeting', newVal: enteredMeetupData})
        router.push('/');
    }

    return <NewQuizAttempt onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage