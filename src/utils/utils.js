const navigateToTop = (isHome) => {
    if (isHome) {
        window.scrollTo(0, 16 * 77);
    } else {
        window.scrollTo(0, 16 * 28);
    }
};

export { navigateToTop };
