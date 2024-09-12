import React from "react";

// Definiera typen för MS Graph-data
interface GraphData {
  givenName: string;
  surname: string;
  userPrincipalName: string;
  id: string;
}

// Definiera typen för props
interface ProfileDataProps {
  graphData: GraphData;
}

/**
 * Renders information about the user obtained from MS Graph 
 * @param props
 */
export const ProfileData: React.FC<ProfileDataProps> = ({ graphData }) => {
  return (
    <div id="profile-div">
      <p>
        <strong>First Name: </strong> {graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {graphData.surname}
      </p>
      <p>
        <strong>Email: </strong> {graphData.userPrincipalName}
      </p>
      <p>
        <strong>Id: </strong> {graphData.id}
      </p>
    </div>
  );
};
