export const handleCardExpansion = (): void => {
    const parentElements: HTMLCollectionOf<Element> | null = 
        document.getElementsByClassName("vertical-card-container");
        
    for(let item of parentElements){
       const expandButton: Element | null = item.querySelector("button.team-card-btn");
       expandButton?.addEventListener('click', (): void => {
            const dataAttrValue = item.getAttribute('data-opened');
            const newValue = dataAttrValue === "false" ? "true" : "false";
            item.setAttribute("data-opened", newValue);
        });
    }
};

handleCardExpansion();