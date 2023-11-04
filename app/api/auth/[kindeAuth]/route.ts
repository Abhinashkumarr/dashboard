import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs";

// export async function GET(request: object | undefined, {params}: any) {
//     const endpoint = params.kindeAuth;
//     return await handleAuth(request, endpoint);
// }

// Import the necessary function from the package

// Your serverless function to handle a GET request
export async function GET(request: object | undefined, { params }: any) {
    const endpoint = params.kindeAuth;

    try {
        // Assuming handleAuth returns a promise or can be awaited
        const authResult = await handleAuth(request, endpoint);

        // Perform any necessary operations with authResult if required
        // ...

        return {
            status: 200,
            body: JSON.stringify(authResult) // Modify the response as per your use case
        };
    } catch (error) {
        // Handle errors gracefully
        return {
            status: 500,
            body: JSON.stringify({ error: "An error occurred during authentication" })
        };
    }
}
