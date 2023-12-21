import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
    childern : React.ReactNode
}

const Auth0ProviderWithNavigate = ({childern}:Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;

    if(!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initialise auth")
    }
    const onRedirectCallback = (appState?:AppState,user?:User)=>{
        console.log("USER",user)

    }
    return(
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
            redirect_uri:redirectUri
        }}
        onRedirectCallback={onRedirectCallback}
        >
            {childern}
        </Auth0Provider>
    )


}


export default Auth0ProviderWithNavigate