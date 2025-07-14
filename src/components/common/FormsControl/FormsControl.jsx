import React from "react"
import styles from "./FormsControl.module.css"

// export const Textarea = ({ input, meta, ...props }) => {
//   let hasErorr = meta.touched && meta.error
//   return (
//     <div className={styles.formControl}>
//       <div><textarea className={hasErorr ? styles.error : ""} {...input} {...props}></textarea></div >
//       {hasErorr ? <span className={styles.error}>{meta.error}</span> : undefined}
//     </div>
//   )
// };

// export const Input = ({ input, meta, ...props }) => {
//   let hasErorr = meta.touched && meta.error
//   return (
//     <div className={styles.formControl}>
//       <div><input className={hasErorr ? styles.error : ""} {...input} {...props}></input></div >
//       {hasErorr ? <span className={styles.error}>{meta.error}</span> : undefined}
//     </div>
//   )
// };


export const CustomFieldCreator = (Element) => {
  return ({ input, meta, ...props }) => {
    let hasErorr = meta.touched && meta.error;
    return (
      <div className={styles.formControl}>
        <div><Element className={hasErorr ? styles.error : ""} {...input} {...props} /></div >
        {hasErorr ? <span className={styles.error}>{meta.error}</span> : undefined}
      </div>
    )
  }
}
