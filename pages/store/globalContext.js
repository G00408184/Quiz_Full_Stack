import { createContext, useState } from 'react'

const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({ aString: 'init val', count: 0 })

    function editGlobalData(command) { // {cmd: someCommand, newVal: 'new text'}
        console.log('editGlobalData ' + JSON.stringify(command))
        if (command.cmd == 'changeTheString') { // {cmd: 'changeTheString, newVal: 'the new text'}  // see react video 3:27:00
            setGlobals((previousGlobals) => { let newGlobals = previousGlobals; newGlobals.aString = command.newVal; return newGlobals })
        }
        if (command.cmd == 'incMeetupCount') { // {cmd: 'incMeetupCount'}  // see react video 3:27:00
            setGlobals((previousGlobals) => { let newGlobals = previousGlobals; newGlobals.count++; return newGlobals })
        }
        console.log('globals ' + JSON.stringify(globals))
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals
    }

    return <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalContext
