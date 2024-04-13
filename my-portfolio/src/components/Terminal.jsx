import { useState, useRef, useEffect } from "react";

import commands from "../public/commands";

const Terminal = () => {

    const [command, setCommand] = useState('');

    const [prevCommands, setPrevCommands] = useState([]);

    const [prevOutputs, setPrevOutputs] = useState([]);

    const [archivedCommands, setArchivedCommands] = useState([]);

    const [commandIdx, setCommandIdx] = useState(0);

    const scrollableRef = useRef(null);

    const inputRef = useRef(null);

    useEffect(
        () => {
            scrollableRef.current.scrollTo(0, scrollableRef.current.scrollHeight);
            inputRef.current.focus();
        }
    )

    useEffect(
        () => {
            setCommandIdx(archivedCommands.length);
            console.log(archivedCommands);
        }, [archivedCommands]
    );

    useEffect(
        () => setCommand(commandIdx >= archivedCommands.length ? '' : archivedCommands[commandIdx]),
        [archivedCommands, commandIdx]
    );

    const moveForward = () => {
        setCommandIdx(Math.min(commandIdx+1, archivedCommands.length));
    }

    const movebackward = () => 
    {
        setCommandIdx(Math.max(commandIdx-1, 0));
    }

    const executeCommand = () =>
    {
        setPrevCommands([...prevCommands, command]);
        setArchivedCommands([...archivedCommands, command]);
        setPrevOutputs([...prevOutputs, commands[command] ?? `command '${command}' not found`]);
        if(command.trim().toLowerCase() == "clear"){
            setPrevCommands([]);
            setPrevOutputs([]);
        }
        setCommand('');
        
    }
    

  return (
    <div className="flex justify-center mt-10">
        <div className = "bg-black rounded-lg border border-gray-200 p-4 w-1/2">
            {/* Terminal Header */}
            <div className = "flex mb-8">
                <div className="flex space-x-1.5 items-center mr-auto">
                        <div className="bg-red-500 w-3 h-3 rounded-full" />
                        <div className="bg-yellow-500 w-3 h-3 rounded-full" />
                        <div className="bg-green-500 w-3 h-3 rounded-full" />
                </div>
                <div className="text-blue-500 mr-auto text-lg">
                    <span className="text-green-500">visitor</span>@hussein-ebrahimPortfolio
                </div>
                    
            </div>
            <div className="max-h-96 overflow-y-auto" ref = {scrollableRef}>
                {/* Hitory */}
                {
                    prevCommands.map((cmd, idx) => {
                        return (
                        <div className="flex-col mt-2" key={idx}>
                            <div className="text-blue-500 ml-auto text-md w-full flex flex-wrap">
                                <span className="text-green-500">visitor</span>@hussein-ebrahimPortfolio:<span className="text-lg">~$</span> 
                                <span className="text-white ml-2"> {cmd} </span>
                            </div>
                            <div className="text-white">
                                {prevOutputs[idx]}
                            </div>
                        </div>
                        );
                    })
                }

                {/* Terminal Writing Command */}
                <div className="flex-col mt-2">
                    <div className="text-blue-500 ml-auto text-md w-full flex flex-wrap">
                        <span className="text-green-500">visitor</span>@hussein-ebrahimPortfolio:<span className="text-lg">~$</span>
                        <input className="bg-black text-white border-none focus:outline-none pl-2 flex-grow" 
                        spellCheck="false"
                        value = {command}
                        onChange={(event) => setCommand(event.target.value)}
                        placeholder="help"
                        onKeyDown={(event)=>{
                            if(event.key === "Enter")
                                executeCommand();
                            else if(event.key === 'ArrowUp'){
                                event.preventDefault();
                                movebackward();
                            }
                            else if(event.key === 'ArrowDown')
                                moveForward();
                        }}
                        ref = {inputRef} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Terminal