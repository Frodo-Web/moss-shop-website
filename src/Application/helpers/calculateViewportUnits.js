const calculateViewportUnits = () => {

    const setViewportUnits = () => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        const vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        // document.querySelector('body').style.setProperty('--vh', `${vh}px`);
    }

    document.addEventListener('DOMContentLoaded', setViewportUnits);
    window.addEventListener('resize', setViewportUnits);
    window.addEventListener('orientationChange', setViewportUnits);

}
export default calculateViewportUnits;