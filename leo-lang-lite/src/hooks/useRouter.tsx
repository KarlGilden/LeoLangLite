
const useRouter = () => {

    const route = (routes:any) => {
        const path = window.location.pathname;
        return routes[path];
    };

    const navigate = (path:string) => {
        window.location.href = path;
    };

    return {
        route: route,
        navigate: navigate
    }
};

export default useRouter;