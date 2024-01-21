
const useRouter = () => {

    const route = (routes:any) => {
        const path = window.location.pathname;
        return routes[path];
    };

    const navigate = (path:string) => {
        window.location.href = path;
    };

    const scrollTo = (id:string) => {
        const section = document.getElementById(id);
        if(!section) return;

        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return {
        route: route,
        navigate: navigate,
        scrollTo: scrollTo
    }
};

export default useRouter;