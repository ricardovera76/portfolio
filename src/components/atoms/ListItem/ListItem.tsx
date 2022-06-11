import React from 'react';
import classes from "./ListItem.module.css"

type Props = {
  content: string
}

const ListItem = ({content}: Props) => {
  return (
    <li className={classes.item}>{content}</li>
  )
}

export default ListItem