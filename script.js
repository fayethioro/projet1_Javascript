// declaration des variables

const components = document.querySelector('.components');

    let component;
    let entete;
    let textarea;
    let icones;
    let corbeille;
    let editeur;

// fonctions

function creerComponent() 
{
    
    //creerComponent
    component = document.createElement('div');
    component.classList.add('component');
    components.appendChild(component);

    //creerEntete
    entete = document.createElement('div');
    entete.classList.add('entete');
    component.appendChild(entete);

    //creerTextarea
    textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    // textarea.setAttributes('rows="5" cols="33">');
    component.appendChild(textarea);

    //creerIcones
    icones = document.createElement('div');
    icones.classList.add('icones');
    entete.appendChild(icones);

    //creerEditeur
    editeur = document.createElement('i');
    editeur.classList.add('fa-solid');
    editeur.classList.add('fa-edit');
    editeur.classList.add('fa-pen-to-square')
    icones.appendChild(editeur);

    //creerCorbeille
    corbeille = document.createElement('i');
    corbeille.classList.add('fa-solid');
    corbeille.classList.add('fa-trash');
    corbeille.classList.add('fa-trash-can');
    icones.appendChild(corbeille);

    corbeille.addEventListener('click' , function() 
    {
    component.parentNode.removeChild(component);
    }); 
    editeur.addEventListener('click', function() 
    {
        textarea.disabled = !textarea.disabled
    });
    
}
document.querySelector('.add__note').onclick = creerComponent;
