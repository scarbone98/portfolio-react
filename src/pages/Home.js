import React, {useEffect, useState} from 'react';
import firebase from "../firebase";


export default function Home(props) {

    const projectsRef = firebase.firestore().collection('projects');

    async function fetchProjects() {
        try {
            const projects = await projectsRef.get();
            setProjects(projects.docs.map(doc => doc.data()));
        } catch (e) {
            // There was an error booooo!
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    const [projectsDocs, setProjects] = useState([]);

    return (
        <div>
            <h1>This is the home page</h1>
            {
                projectsDocs
                    .filter(project => !!project.language)
                    .sort((a, b) => {
                        if (a.language && b.language) {
                            return a.language.localeCompare(b.language)
                        }
                        return 0;
                    })
                    .map(project => {
                        const {name, language} = project;
                        return (
                            <div>
                                <h2>{name}</h2>
                                <h4>{language}</h4>
                            </div>
                        )
                    })
            }
        </div>
    )
}