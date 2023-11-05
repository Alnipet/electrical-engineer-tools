import React from 'react'
import styles from './Logo.module.scss'

type Props = {}

export const Logo = (props: Props) => {
  return (<div className={styles.wrapper}>
    <div className={styles.logo}></div>
    <div className={styles.textInner}>
      <div className={styles.textLine}>Electrical</div>
      <div className={styles.textLine}>Engineer</div>
      <div className={styles.textLine}>Tools</div>
    </div>
  </div>)
}
