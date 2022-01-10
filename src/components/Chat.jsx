import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import kuma from '../assets/img/kuma.jpg'
import unknown from '../assets/img/unknown.jpeg'

const Chat=(props)=>{
    const isQuestion=(props.type==='question');
    const classes=isQuestion ? 'p-chat__row':'p-chat__reverse';
    return(
        <ListItem className={classes}>
        <ListItemAvatar>
            {isQuestion ?(
                <Avatar alt="icon" src={kuma} />
                ):(
                <Avatar alt="icon" src={unknown} />
            )}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat