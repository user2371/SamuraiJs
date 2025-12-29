import { Contact } from "./Contact";

export function ProfileData(props) {
  return (
        <ul>
          <li>
            <b>lookingForAJob:</b>{" "}
            {props.userProfile.lookingForAJob ? "yes" : "no"}
          </li>
          <li>
            <b>lookingForAJobDescription:</b>
            {props.userProfile.lookingForAJob &&
              props.userProfile.lookingForAJobDescription}
          </li>
          <li>
            <b>fullName: </b>
            {props.userProfile.fullName}
          </li>
          <li>
            <b>about me: </b>
            {props.userProfile.aboutMe}
          </li>
          <li>
            <b>contacts: </b>
            {Object.keys(props.userProfile.contacts).map((contact) => {
              return (
                <Contact
                  key={contact}
                  contactTitle={contact}
                  contactValue={props.userProfile.contacts[contact]}
                />
              );
            })}
          </li>
        </ul>
  )
}