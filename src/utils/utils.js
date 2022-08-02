const navigateToTop = (isHome) => {
    //900 is MUI md breakpoint
    //numbers are to scroll down enough that the bottom of the header appears at the top
    if (window.innerWidth < 900) {
        window.scrollTo(0, 0);
    } else if (isHome) {
        window.scrollTo(0, 16 * 77);
    } else {
        window.scrollTo(0, 16 * 29);
    }
};

export { navigateToTop };
