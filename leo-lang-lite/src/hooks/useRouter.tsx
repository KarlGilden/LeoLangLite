
const useRouter = (routes:any) => {

 const path = window.location.pathname;
 console.log(path)
 console.log(routes[path])
return routes[path];
};

export default useRouter;