const check_auth = () => {
    const token: string | null = localStorage.getItem("token");
    const project_token: string | null = localStorage.getItem("project_token");
    const router = useRouter();
    const route = useRoute();
    
    if (!token){
         console.log("No token found, redirecting to login");
        router.push("/login");
    } 
    if (
        !project_token &&
        route.path !== "/login" &&
        route.path !== "/signup" &&
        route.path !== "/projects"
    ) {
        console.log("No project token found, redirecting to login");
        router.push("/login");
    }
    
}

export default defineNuxtRouteMiddleware((to, from) => {
    check_auth();
})
