
class Node{

    constructor()
    {
        this.children = [];
        for(let i = 0; i < 28; ++i)
            this.children.push('null');
        this.is_terminal = false;
    }
}

export default Node;