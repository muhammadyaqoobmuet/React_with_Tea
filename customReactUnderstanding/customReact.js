 function customRender(reactElement,mainContaier){
   /*
    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML = reactElement.children;
    domElem.setAttribute('href',reactElement.props.href)
    domElem.setAttribute('target',reactElement.props.target)

    container.appendChild(domElem);
    better dynamic code
    
    */

const domElem = document.createElement(reactElement.type)
    domElem.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
     // if children is inside prop which now dont but used to
     if(prop === 'children') continue;
        // key with value
       domElem.setAttribute(prop,reactElement.props[prop])
    }
    mainContaier.appendChild(domElem)
 }





 const reactElement = {
    type: 'a',
    props:{  // properties or attribues
     href:"https://www.sneakyhub.com",
     target:"_blank"   
    },
    // html or text 
    children:"click me to visible sneakyWebsite"
 }

 const mainContaier = document.querySelector('#root');
 // what to render , where to render
 customRender(reactElement,mainContaier)