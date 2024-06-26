
const commands = {
    "help": (<>
        <div>clear: clear commands history</div>
        <div>email: my email address</div>
        <div>education: my education history</div>
        <div>experience: my previous experiences</div>
        <div>projects: what i worked on</div>
        <div>resume: my cv</div>
        <div>transcript_of_records: my records and grades</div>
        <div>publications: my published research papers</div>
        <div>awards: achievments</div>
        <div>skills</div>
        <div>languages</div>
        <div>favourite_series</div>
        <div>help: list of commands you can use</div>
    </>),
    "clear": <></>,
    "email": <><div>husseinebrahim2150@gmail.com</div></>,
    "education": <div className="flex-col space-y-5">
        <div>
            <div>senior CSE student at the GUC 2019-2024</div>
            <div>cumulative gpa is A+</div>
        </div>
        <div>
            <div>bachelor thesis at univeristy of luebeck in germany</div>
            <div>thesis in explainable AI for pedestrian behavior prediction in autnoumus driving systems</div>
            <div>thesis grade A+</div>
        </div>
    </div>,
    "experience":
    <div className="flex-col space-y-5">
        <div>
            I interned at the guc in a project of making a VR experience of driving car remotely
        </div>
        <div>
            I interned as a researcher in the university of luebeck in XAI project
        </div>
        <div>
            I volunteered as a junior teaching assistant at the guc for the data structures and algos course
        </div>
    </div>,
    "projects":
    <div className="flex-col space-y-5">
        <div>
            full stack web application for online learning system using MERN stack
        </div>
        <div>
            data engineering pipeline for cleaning, anlayzing the nyc green taxi dataseet
        </div>
        <div>
            social media mobile application for guc students using flutter 
        </div>
        <div>
            automaten theory visualization (under dev)
        </div>
        <div>
            the conqueror game (strategy game) using java swing
        </div>
        <div>
            search (using java) and logic (using prolog) ai agent for an optimization problem
        </div>
        <div>
            operating system simulation in java
        </div>
        <div>
            survival zombie game using unity engine
        </div>
    </div>,
    "awards":
    <div className="flex-col space-y-5">
        <div>ranked 5th student over my class</div>
        <div>ranked 4th team in dell hacktrick (ML and cybersec competition) over 150+ teams</div>
        <div>participated in multiple coding competitions</div>
        <div>awarded fully funded workshop in cloud computing in berlin from the guc</div>
        <div>awarded 70% schoalrship to study at the guc</div>
    </div>,
    "skills":
    <>java, cpp, python, docker, javascript, prolog, haskell, git, node, react</>,
    "languages":
    <>english C1, german A2</>,
    "transcript_of_records": 
    <>
        <span> follow this link </span>
        <a href="https://drive.google.com/file/d/1BOW5YpAWai_SAhVrbgnr00XFUi09FLAQ/view?usp=sharing"
           className="text-blue-300 underline">
            Transcript
        </a>
    </>,
    "favourite_series": <>
        Succession
    </>,
    "resume": 
    <>
        <span> follow this link </span>
        <a href="https://drive.google.com/file/d/1ZSYS_VDafe6brcnsQwKTU_GbkF6zKW88/view?usp=sharing"
           className="text-blue-300 underline">
            Resume
        </a>
    </>,
    "publications":
    <>
        <div className="flex-col">
            <div className="text-orange-500">
                On the Road to Clarity: Exploring Expplaianable AI for World Models in a Driver Assistance System
            </div>
            <div>
                <span>Conference: </span>
                <a href="https://ieeecai.org/2024/" className="text-blue-300 underline">Conference: IEEE Conference on Artificial Intelligence (IEEE CAI) 2024</a>
            </div>
            <div>
                Accpeted: March 2024
            </div>
            <div>
                To Be Published: June 2024
            </div>
            <div>
                Contributions: 
                <ul className="ml-3">
                    <li> - Contributed in enhancing the explainability of world models used in predicting pedestrian behavior detection within a
                    driver assistance system.</li>
                    <li> - Applied Layer-wise Relevance Propagation (LRP) technique to interpret the LSTM model’s predictions for the next time
                    frame.</li>
                    <li> - Integrated LRP explanation of the LSTM with perturbation analysis on Variational Autoencoder (VAE) to generate compre-
                    hensive heat map explanations for perception predictions.</li>
                </ul>
            </div>
        </div>
    </>

}

export default commands;