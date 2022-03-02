import { useIsAuthenticated, useMsal } from "@azure/msal-react";

import { SignOutButton } from "./SignOutButton";
import { InteractionStatus } from "@azure/msal-browser";

const SignInSignOutButton = () => {
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    //console.log(isAuthenticated);

    if (isAuthenticated) {
        return <SignOutButton />;
    } else if (inProgress !== InteractionStatus.Startup && inProgress !== InteractionStatus.HandleRedirect) {
        // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
        return /*<SignInButton />*/ null;
    } else {
        return null;
    }
}

export default SignInSignOutButton;