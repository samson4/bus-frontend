const check_auth = () => {
    const token: string | null = localStorage.getItem("token");
    const project_token: string | null = localStorage.getItem("project_token");
    const router = useRouter();
    const route = useRoute();
    if ((!token || !project_token) && route.path !== "/login") {
        router.push("/login");
    }
    
}

export default defineNuxtRouteMiddleware((to, from) => {
    check_auth();
})
