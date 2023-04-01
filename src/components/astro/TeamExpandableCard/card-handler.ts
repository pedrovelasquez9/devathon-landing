export const handleCardExpansion = (): void => {
    const parentElements: HTMLCollectionOf<Element> | null = 
        document.getElementsByClassName("vertical-card-container");
        
    const closeOtherCards = (clickedElemId: string | null): void => {
        for(let item of parentElements){
            const cardButton: Element | null = item.querySelector("button.team-card-btn");
            if(clickedElemId !== cardButton?.getAttribute("id")){
                item.setAttribute('data-opened', "false");
            }
        }
    }

    for(let item of parentElements){
       const expandButton: Element | null = item.querySelector("button.team-card-btn");
       expandButton?.addEventListener('click', (): void => {
            const clickedElem = expandButton.getAttribute('id');
            closeOtherCards(clickedElem);
            
            const dataAttrValue = item.getAttribute('data-opened');
            const newValue = dataAttrValue === "false" ? "true" : "false";
            item.setAttribute("data-opened", newValue);
        });
    }
};

handleCardExpansion();