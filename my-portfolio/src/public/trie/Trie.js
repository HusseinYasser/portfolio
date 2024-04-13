
import Node from './Node.js';

class Trie
{
    constructor()
    {
        this.root = new Node();
    }

    addCommand(command)
    {
        let currNode = this.root;
        Array.from(command).forEach(char => {
            if(currNode.children[char.charCodeAt(0) - 97] == 'null')
            {
                currNode.children[char.charCodeAt(0) - 97] = new Node();
            }
            currNode = currNode.children[char.charCodeAt(0) - 97];
        });
        currNode.is_terminal = true;
    }

    autoComplete(command)
    {
        if(command == '')
            return 'help';
        let currNode = this.root;
        let ans = '';
        for(let i = 0; i < command.length; ++i)
        {
            if(currNode.children[command[i].charCodeAt(0) - 97] == 'null')
            {
                return '';
            }
            currNode = currNode.children[command[i].charCodeAt(0) - 97];
        }
        //Now the currNode is the current string itself
        while(!currNode.is_terminal)
        {
            for(let i = 0; i < 26; ++i)
            {
                if(currNode.children[i] != 'null')
                {
                    ans += String.fromCharCode(i + 97);
                    currNode = currNode.children[i];
                }
            }
        }
        return ans; 
    }
}

const commandsTrie = new Trie();

commandsTrie.addCommand("help");
commandsTrie.addCommand("awards");
commandsTrie.addCommand("clear");
commandsTrie.addCommand("education");
commandsTrie.addCommand("projects");
commandsTrie.addCommand("languages");
commandsTrie.addCommand("email");
commandsTrie.addCommand("skills");
commandsTrie.addCommand("experience");
commandsTrie.addCommand("resume");
commandsTrie.addCommand("transcript_of_records");
commandsTrie.addCommand("publications");
commandsTrie.addCommand("favourite_series");

export default commandsTrie;