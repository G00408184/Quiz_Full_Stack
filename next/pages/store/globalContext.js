// Lets do all database stuff here and just share this global context with the rest of the App
// - so no database code anywhere else in our App
// - every CRUD function the App needs to do is in here, in one place
// - makes debugging etc so much easier
// - all external connections still have to go through /api routes 

import { createContext, useState, useEffect, useRef } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({
        aString: 'init val',
        count: 0,
        hideHamMenu: true,
        meetings: [],
        dataLoaded: false,
        score: 0,
        name: '',
        image: '',
    });

    useEffect(() => {
        getAllMeetings();
    }, []);

    async function getAllMeetings() {
        const response = await fetch('/api/get-Quiz', {
            method: 'POST',
            body: JSON.stringify({ meetups: 'all' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        console.log("Fetched Data:", data);

        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
            newGlobals.meetings = data.meetings;
            newGlobals.dataLoaded = true;
            return newGlobals;
        });
    }

    function updateScore(newScore) {
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
            newGlobals.score = newScore;
            return newGlobals;
        });
    }


    function updateName(newName) {
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
            newGlobals.name = newName; // Change newName to name
            return newGlobals;
        });
    }

    function updateImage(newImage) {
        setGlobals((previousGlobals) => {
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
            newGlobals.image = newImage; // Change newImage to image
            return newGlobals;
        });
    }
    async function editGlobalData(command) {
        if (command.cmd === 'hideHamMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideHamMenu = command.newVal;
                return newGlobals;
            });
        }

        if (command.cmd === 'addMeeting') {
            const { name, image, score } = command.newVal; // Destructure the new values
            console.log('Entered Values:', { name, image, score });

            const newMeeting = { name: name, image: image, score: score }; // Create a new meeting object

            const response = await fetch('/api/new-Quiz', {
                method: 'POST',
                body: JSON.stringify(newMeeting),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json(); // Check here that it worked OK
            if (response.ok) {
                setGlobals((previousGlobals) => {
                    const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                    newGlobals.meetings.push(newMeeting); // Add the new meeting to the meetings array
                    return newGlobals;
                });
            } else {
                console.error('Failed to add meeting:', data);
            }
        }
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals,
        updateScore,
        updateName,
        updateImage,
        score: globals.score,
        name: globals.name,
        image: globals.image,
    };

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
