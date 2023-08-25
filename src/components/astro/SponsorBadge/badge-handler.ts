export const handleBadgeExpansion = (): void => {
    const badgeElements: HTMLCollectionOf<Element> = document.getElementsByClassName("sponsor-badge");
    const closeOtherBadges = (clickedElemId: string | null): void => {
        for(let item of badgeElements){
            if(clickedElemId !== item?.getAttribute("id")){
                item.setAttribute('data-opened', "false");
            }
        }
    }

    for(let item of badgeElements){
       item.addEventListener('click', (): void => {
            const clickedElem = item.getAttribute('id');
            
            closeOtherBadges(clickedElem);
            
            const dataAttrValue = item.getAttribute('data-opened');
            const newValue = dataAttrValue === "false" ? "true" : "false";
            item.setAttribute("data-opened", newValue);
        });
    }
};

handleBadgeExpansion();