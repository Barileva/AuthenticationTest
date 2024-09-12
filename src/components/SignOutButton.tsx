import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Renders a sign out button
 */
export const SignOutButton: React.FC = () => {
  const { instance } = useMsal();

  // Typdefinition för logoutType
  const handleLogout = (logoutType: "popup" | "redirect") => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/", // Används för att omdirigera efter utloggning i popup
        mainWindowRedirectUri: "/",  // Omdirigerar huvudfönstret efter utloggning
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/", // Omdirigerar användaren efter utloggning
      });
    }
  };

  return (
    <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="start"
      title="Sign Out"
    >
      <Dropdown.Item as="button" onClick={() => handleLogout("popup")}>
        Sign out using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogout("redirect")}>
        Sign out using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
};
