import { PublicClientApplication } from "@azure/msal-browser";  // Importera PublicClientApplication
import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "9e550a67-68f9-4415-9b71-e6459ed4b756",
    tenantId: "a21320bb-facd-466b-81b1-df45c6bc6325",
    redirectUri: "http://localhost:5173/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      }
    }
  }
};

// Skapa MSAL-instans och exportera den
export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
  scopes: ["User.Read"]
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
