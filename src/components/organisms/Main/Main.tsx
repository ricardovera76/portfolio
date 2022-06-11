import React from 'react'
import Greet from '../../molecules/Greet/Greet'
import Resume from '../../molecules/Resume/Resume'
import classes from "./Main.module.css"

type Props = {}

const Main = (props: Props) => {
  return (
    <section className={classes.main}>
        <div className={classes.content}>
          <Greet />
          <Resume />
        </div>
      </section>
  )
}

export default Main