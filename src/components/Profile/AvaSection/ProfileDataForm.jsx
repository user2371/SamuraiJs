import { Field, reduxForm } from "redux-form";
import { CustomFieldCreator } from "../../common/FormsControl/FormsControl";
import { Contact } from "./Contact";
import { reaquiredField } from "../../../utils/validators/validators";
import styles from "./ProfileDataForm.module.css";
const Input = CustomFieldCreator("input");
const Textarea = CustomFieldCreator("textarea");

export function ProfileDataForm({ handleSubmit, error, userProfile }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.fieldWrapper}>
        <b>lookingForAJob: </b>
        <Field
          component={Input}
          name="lookingForAJob"
          type="checkbox"
          placeholder="lookingForAJob"
        />
      </div>
      <div className={styles.fieldWrapper}>
        <b>lookingForAJobDescription: </b>
        <Field
          component={Textarea}
          name="lookingForAJobDescription"
          type="text"
          placeholder="lookingForAJobDescription"
        />
      </div>
      <div className={styles.fieldWrapper}>
        <b>fullName: </b>
        <Field
          component={Input}
          name="fullName"
          type="text"
          placeholder="fullName"
        />
      </div>
      <div className={styles.fieldWrapper}>
        <b>about me: </b>
        <Field
          component={Input}
          name="aboutMe"
          type="text"
          placeholder="about me"
        />
      </div>
      <div>
        <b>contacts: </b>
      </div>
      {Object.keys(userProfile.contacts).map((contact) => {
        return (
          <div className={styles.fieldWrapper} key={contact}>
            <Contact
              contactTitle={contact}
              contactValue={userProfile.contacts[contact]}
            />
            <Field
              component={Input}
              name={`contacts.${contact.toLocaleLowerCase()}`}
              type="text"
              placeholder={contact}
            />
          </div>
        );
      })}

      {error && <div className={styles.summaryFormError}>{error}</div>}
      <button>save</button>
    </form>
  );
}

export let ProfileDataReduxForm = reduxForm({ form: "Profile" })(ProfileDataForm);
