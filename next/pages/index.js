import QuizList from '../components/Quiz/QuizList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <QuizList meetups={globalCtx.theGlobalObject.meetings} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;