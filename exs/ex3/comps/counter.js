var c_template = document.createElement("template"); // <template></template>

c_template.innerHTML = `
<style>

#counter {
    background-color:rgb(135, 100, 158);
    display: flex;
}

#counter > button {
    width: 40px;
    height: 40px;
    background-color: rgb(229, 215, 255);
    border: none;
    border-radius: 10px;
    margin: 10px;
}

#counter div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

#bar {
    width: 0px;
    height: 15px;
    background-color: rgb(128, 102, 129);
}

</style>
<div id="counter">
    <button id="d_but">-</button>
    <div id="number">1</div>
    <button id="i_but">+</button>
</div>

<div id="bar"></div>
`;

class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.num = 1;
    }

    connectedCallback(){
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
        this.shadowRoot.querySelector("#i_but").onclick = () => this.increase();
        this.shadowRoot.querySelector("#d_but").onclick = () => this.decrease();
    }

    decrease(){
        this.num = this.num - 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }

    increase(){
        this.num = this.num + 1;
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter);